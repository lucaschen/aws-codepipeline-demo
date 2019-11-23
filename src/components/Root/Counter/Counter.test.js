import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Counter from "./Counter";

test("Counter component works properly", () => {
  const { getByTestId, getByText } = render(<Counter />);

  const counterValueEl = getByTestId("counter-value");
  const decrementButtonEl = getByText("-1", { selector: "button" });
  const incrementButtonEl = getByText("+1", { selector: "button" });

  expect(counterValueEl).toHaveTextContent("0");

  fireEvent.click(decrementButtonEl);

  expect(counterValueEl).toHaveTextContent("-1");

  fireEvent.click(decrementButtonEl);

  expect(counterValueEl).toHaveTextContent("-2");

  fireEvent.click(incrementButtonEl);

  expect(counterValueEl).toHaveTextContent("-1");

  fireEvent.click(incrementButtonEl);

  expect(counterValueEl).toHaveTextContent("0");

  fireEvent.click(incrementButtonEl);

  expect(counterValueEl).toHaveTextContent("1");
});
