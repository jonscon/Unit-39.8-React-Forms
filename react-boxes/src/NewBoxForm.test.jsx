import React from "react";
import {render} from "@testing-library/react"
import NewBoxForm from "./NewBoxForm.jsx";

// Smoke Test
it("renders without crashing", function() {
    render(<NewBoxForm />);
})

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
})