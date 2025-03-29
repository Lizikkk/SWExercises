import { render, screen, fireEvent } from '@testing-library/react';
import NameFunction from './NameFunction';
import Form from './Form';

describe('NameFunction', () => {
  test('should render greeting with "Guest" by default', () => {
    render(<NameFunction />);
    // Check if the default "Guest" greeting is rendered
    expect(screen.getByText(/HI, Guest!/i)).toBeInTheDocument();
  });

  test('should render greeting with name when form is submitted', () => {
    render(<NameFunction />);
    
    // Open the form
    fireEvent.click(screen.getByText(/Show Form/i));

    // Simulate form submission with a name
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } });
    fireEvent.click(screen.getByText(/Submit/i));

    // Check if the greeting changes to "HI, John!"
    expect(screen.getByText(/HI, John!/i)).toBeInTheDocument();
  });
});
