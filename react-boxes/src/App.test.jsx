import React from "react";
import {render} from "@testing-library/react"
import App from "./App.jsx";

// Smoke Test
it("renders without crashing", function() {
    render(<App />);
})

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
})