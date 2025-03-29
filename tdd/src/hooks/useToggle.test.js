import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import useToggle from './useToggle';

function TestComponent() {
  const [isVisible, toggle] = useToggle();
  return (
    <div>
      <p>{isVisible ? 'Visible' : 'Hidden'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

describe('useToggle hook', () => {
  test('should toggle the value', () => {
    render(<TestComponent />); 

    expect(screen.getByText('Hidden')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Toggle'));

    expect(screen.getByText('Visible')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Toggle'));

    expect(screen.getByText('Hidden')).toBeInTheDocument();
  });

  test('should use the initial state passed as a parameter', () => {
    function WrapperComponent() {
      const [isVisible, toggle] = useToggle(true); 
      return (
        <div>
          <p>{isVisible ? 'Visible' : 'Hidden'}</p>
          <button onClick={toggle}>Toggle</button>
        </div>
      );
    }

    render(<WrapperComponent />);

    expect(screen.getByText('Visible')).toBeInTheDocument();
  });
});
