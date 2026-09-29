import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('adds and deletes todo items without crashing', () => {
  render(<App />);

  const todoInput = screen.getAllByRole('textbox')[1];
  fireEvent.change(todoInput, { target: { value: 'Learn React' } });
  fireEvent.click(screen.getByRole('button', { name: /add/i }));

  expect(screen.getByText('Learn React')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /delete/i }));
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
