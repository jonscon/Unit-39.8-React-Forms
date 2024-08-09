import React from "react";
import {render, fireEvent, wait} from "@testing-library/react"
import BoxList from './BoxList';

function addBox(boxList, height = "3", width = "3", color = "pink") {
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    const colorInput = boxList.getByLabelText("Background Color:");
    fireEvent.change(colorInput, { target : {value: color } });
    fireEvent.change(heightInput, { target : {value: height } });
    fireEvent.change(widthInput, { target : {value: width } });
    const button = boxList.getByText("Add");
    fireEvent.click(button);
}

// Smoke Test
it("renders without crashing", function() {
    render(<BoxList />);
})

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("can add a new box", function() {
    const boxList = render(<BoxList />);

    // no boxes added yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    addBox(boxList);

    // expect box to be shown
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    
    // ERROR: cssTools.parse is not a function
    // expect(removeButton.previousSibling).toHaveStyle(`
    //     width: 3em;
    //     height: 3em;
    //     background-color: pink;
    // `)
    
    // expect inputs to be empty after form submission
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
})

it("can remove a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);
    const removeButton = boxList.getByText("X");

    // click the remove button to remove box
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
})