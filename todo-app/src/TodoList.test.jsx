import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList.jsx";
import {it, expect } from 'vitest';

function addTodo(todoList, task="test task") {
    const taskInput = todoList.getByLabelText("To-Do");
    fireEvent.change(taskInput, { target: { value: task } });
    const submitButton = todoList.getByText("Add");
    fireEvent.click(submitButton);
}

// Smoke Test
it("renders without crashing", function() {
    render(<TodoList />);
});

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function() {
    const list = render(<TodoList />);
    addTodo(list);

    // expect form to clear and todo to be on the page
    expect(list.getByLabelText("To-Do")).toHaveValue("");
    expect(list.getByText("test task")).toBeInTheDocument();
    expect(list.getByText("Edit")).toBeInTheDocument();
    expect(list.getByText("X")).toBeInTheDocument();
})

it("can edit a todo", function() {
    const list = render(<TodoList />);
    addTodo(list);

    fireEvent.click(list.getByText("Edit"));
    const editInput = list.getByDisplayValue("test task");
    fireEvent.change(editInput, { target: { value: "boo" } });
    fireEvent.click(list.getByText("Update"));

    // expect only edited task to appear
    expect(list.getByText("boo")).toBeInTheDocument();
    expect(list.queryByText("test task")).not.toBeInTheDocument();
})

it("can delete a todo", function() {
    const list = render(<TodoList />);
    addTodo(list);

    fireEvent.click(list.getByText("X"));

    // expect task to be gone
    expect(list.queryByText("test task")).not.toBeInTheDocument();
})