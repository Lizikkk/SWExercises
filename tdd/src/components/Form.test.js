import { render, screen, fireEvent } from '@testing-library/react';
import FormComponent from './Form';

describe('FormComponent', () => {
  test('should render name and email input fields and submit button', () => {
    render(<FormComponent onSubmit={() => {}} />);
    
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test('should show an error message if both fields are not filled', () => {
    render(<FormComponent onSubmit={() => {}} />);

    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.getByText(/Both fields are required!/i)).toBeInTheDocument();
  });

  test('should show an error message if the email is invalid', () => {
    render(<FormComponent onSubmit={() => {}} />);
    
    // Type a name and an invalid email
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'invalid-email' } });

    // Click the submit button
    fireEvent.click(screen.getByText(/Submit/i));

    // Check if the error message for invalid email is displayed
    expect(screen.getByText(/Enter a valid email!/i)).toBeInTheDocument();
  });

  test('should call onSubmit with name when form is valid', () => {
    const mockSubmit = jest.fn();

    render(<FormComponent onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });

    fireEvent.click(screen.getByText(/Submit/i));

    expect(mockSubmit).toHaveBeenCalledWith('John Doe');
  });
});
