import React from "react";
import { render } from "@testing-library/react";

import App from "./App";
import Dropdown from "react-dropdown";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { mockData } from "./fixtures/episodes";

jest.mock("./api/fetchShow");

test("checks dropdown functionality", () => {
    mockFetchShow.mockResolvedValueOnce({data: mockData});

    const { queryAllByTestId, getByText } = render(<App />);
    //const dropdownContainer = render(<Dropdown />);

    expect(queryAllByTestId("mission")).toHaveLength(0);

    //const dropdown = getByText(/select a season/i);
});