import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";
import { mockData } from "../fixtures/episodes";

test("test episode rendering", () => {
    render(<Episodes episodes={[]} />);
});

test("component renders with new episode data", () => {

    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

    expect(queryAllByTestId("episode")).toHaveLength(0);
    expect(queryAllByTestId("episode")).toStrictEqual([]);

    rerender(<Episodes episodes={mockData._embedded.episodes} />);

    expect(queryAllByTestId("episode")).toHaveLength(26);
});