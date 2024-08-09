import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo.jsx";
import {it, expect, vi } from 'vitest';


// Smoke Test
it("renders without crashing", function() {
    render(<Todo />);
});

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the update function on submit", function() {
    const updateMock = vi.fn();
    const { getByText } = render(<Todo update={updateMock} />);
    const editButton = getByText("Edit");
    fireEvent.click(editButton);
    const updateButton = getByText("Update");
    fireEvent.click(updateButton);
    expect(updateMock).toHaveBeenCalled();
})

it("runs the remove function on submit", function() {
    const removeMock = vi.fn();
    const { getByText } = render(<Todo remove={removeMock} />);
    const removeButton = getByText("X");
    fireEvent.click(removeButton);
    expect(removeMock).toHaveBeenCalled();
})