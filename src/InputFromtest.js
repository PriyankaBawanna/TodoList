import { getByText, render } from "@testing-library/react";
import React from "react";
import App from "./App";
import InputForm from "./InputForm";
test("render from properly", () => {
  const { getByTestId, getByLabelText } = render(<App />);
  const nameLabel = getByText(/name:/i);
  const emailLabel = getByTestId(/email:/i);
  const passwordLabel = getByTestId(/password/i);
  expect(nameLabel)=toBeInDocument();
  expect(emailLabel)=toBeInDocument();
  expect(passwordLabel)=toBeInDocument();

  const input = getByLabelText(/name:/i);
  expect(input).toHaveAttribute('type','String ')
});
