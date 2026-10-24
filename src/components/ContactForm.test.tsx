import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

async function fill(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Name'), 'Sam Recruiter');
  await user.type(screen.getByLabelText('Email'), 'sam@agency.com.au');
  await user.type(screen.getByLabelText('Message'), 'We have a junior role in Sydney.');
}

afterEach(() => vi.unstubAllGlobals());

describe('ContactForm', () => {
  it('validates required fields', async () => {
    const user = userEvent.setup();
    const openMail = vi.fn();
    render(<ContactForm to="me@example.com" openMail={openMail} />);
    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Send message' }));

    expect(screen.getByText('Please tell me your name')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText(/at least 10 characters/)).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true');
    expect(openMail).not.toHaveBeenCalled();
  });

  it('falls back to a prefilled email draft when no endpoint is configured', async () => {
    const user = userEvent.setup();
    const openMail = vi.fn();
    render(<ContactForm to="me@example.com" openMail={openMail} />);
    await fill(user);
    await user.click(screen.getByRole('button', { name: 'Send message' }));

    const href: string = openMail.mock.calls[0][0];
    expect(href.startsWith('mailto:me@example.com?subject=')).toBe(true);
    expect(decodeURIComponent(href)).toContain('We have a junior role in Sydney.');
    expect(decodeURIComponent(href)).toContain('sam@agency.com.au');
    expect(screen.getByRole('status')).toHaveTextContent(/email app should have opened/);
  });

  it('posts to the form endpoint and shows a confirmation', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}', { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    render(<ContactForm to="me@example.com" endpoint="https://forms.example/abc" />);
    await fill(user);
    await user.click(screen.getByRole('button', { name: 'Send message' }));

    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://forms.example/abc');
    expect(JSON.parse(init.body)).toEqual({ name: 'Sam Recruiter', email: 'sam@agency.com.au', message: 'We have a junior role in Sydney.' });
  });

  it('shows a fallback address if sending fails', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('', { status: 500 })));
    render(<ContactForm to="me@example.com" endpoint="https://forms.example/abc" />);
    await fill(user);
    await user.click(screen.getByRole('button', { name: 'Send message' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('me@example.com');
  });

  it('silently drops submissions that fill the honeypot', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const { container } = render(<ContactForm to="me@example.com" endpoint="https://forms.example/abc" />);
    await fill(user);
    await user.type(container.querySelector('.honeypot input')!, 'spam.example');
    await user.click(screen.getByRole('button', { name: 'Send message' }));

    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
