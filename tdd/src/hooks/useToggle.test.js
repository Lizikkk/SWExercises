import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import useToggle from './useToggle';

function TestComponent() {
  const [isVisible, toggle] = useToggle(); // use the hook

  return (
    <div>
      <p>{isVisible ? 'Visible' : 'Hidden'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

describe('useToggle hook', () => {
  test('should toggle the value', () => {
    render(<TestComponent />); // Render the TestComponent

    // Initially, the state should be "Hidden"
    expect(screen.getByText('Hidden')).toBeInTheDocument();

    // Simulate the button click to toggle the visibility
    fireEvent.click(screen.getByText('Toggle'));

    // After the first toggle, it should show "Visible"
    expect(screen.getByText('Visible')).toBeInTheDocument();

    // Simulate the button click again to toggle back
    fireEvent.click(screen.getByText('Toggle'));

    // After the second toggle, it should show "Hidden" again
    expect(screen.getByText('Hidden')).toBeInTheDocument();
  });

  test('should use the initial state passed as a parameter', () => {
    // Create a wrapper component to test initial state
    function WrapperComponent() {
      const [isVisible, toggle] = useToggle(true); // Initial state is set to true (Visible)
      return (
        <div>
          <p>{isVisible ? 'Visible' : 'Hidden'}</p>
          <button onClick={toggle}>Toggle</button>
        </div>
      );
    }

    render(<WrapperComponent />);

    // The initial state should be "Visible" because we passed `true` as the initial state
    expect(screen.getByText('Visible')).toBeInTheDocument();
  });
});
