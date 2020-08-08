import React from "react";
import { render, wait, screen, fireEvent, waitFor } from "@testing-library/react";

import App from "./App";
//import Dropdown from "react-dropdown";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { mockData } from "./fixtures/episodes";

jest.mock("./api/fetchShow");

test("checks dropdown functionality", async () => {
    mockFetchShow.mockResolvedValue({data: mockData});

    const { queryAllByTestId, getByText, queryByText } = render(<App />);
    //const dropdownContainer = render(<Dropdown />);

    expect(queryAllByTestId("mission")).toHaveLength(0);

    await wait();

    const dropdown = getByText(/select a season/i);
    dropdown.value = "Season 1";

    await wait();
    console.log("setting value to: ", dropdown.value);

       // expect(dropdown.value).toBe("Season 1");
    

    const dropdownValue = queryByText(/while nancy/i);
    expect(dropdownValue);

    // fireEvent.click(getByText("Select a season"));

    // //await wait();

    // expect(getByText(/Season 1/i)).toHaveLength(1);
    // //expect(queryAllByRole(/option/i)).toHaveLength(4);
});