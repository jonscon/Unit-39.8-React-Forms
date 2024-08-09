import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm.jsx";
import {it, expect, vi } from 'vitest';

// Smoke Test
it("renders without crashing", function() {
    render(<NewTodoForm />);
});

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function() {
    const createMock = vi.fn();
    const { getByText } = render(<NewTodoForm addTodo={createMock} />);
    const createButton = getByText("Add");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
})