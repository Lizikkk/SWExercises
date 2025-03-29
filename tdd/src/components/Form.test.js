import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  test('should render name and email input fields and submit button', () => {
    render(<Form onSubmit={() => {}} />);
    
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test('should show an error message if both fields are not filled', () => {
    render(<Form onSubmit={() => {}} />);

    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.getByText(/Both fields are required!/i)).toBeInTheDocument();
  });

  test('should show an error message if the email is invalid', () => {
    render(<Form onSubmit={() => {}} />);
    
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'invalid-email' } });

    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.getByText(/Enter a valid email!/i)).toBeInTheDocument();
  });

  test('should call onSubmit with name when form is valid', () => {
    const mockSubmit = jest.fn();

    render(<Form onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });

    fireEvent.click(screen.getByText(/Submit/i));

    expect(mockSubmit).toHaveBeenCalledWith('John Doe');
  });
});
