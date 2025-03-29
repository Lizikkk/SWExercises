import { render, screen, fireEvent } from '@testing-library/react';
import NameFunction from './NameFunction';

describe('NameFunction', () => {
  test('renders greeting with "Guest" by default', () => {
    render(<NameFunction />);
    expect(screen.getByText(/HI, Guest!/i)).toBeInTheDocument();
  });

  test('updates greeting when form is submitted with a name', () => {
    render(<NameFunction />);
    
    fireEvent.click(screen.getByText(/Show Form/i));

    fireEvent.change(screen.getByLabelText(/Name/i));

    fireEvent.click(screen.getByText(/Submit/i));

  
  });
});
