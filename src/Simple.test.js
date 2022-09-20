import { render, screen, logRoles } from "@testing-library/react";
import Simple from "./Simple";
test("Simple Component testing ", () => {
  render(<Simple />);
  logRoles(screen.getByTestId("myRootDiv"));
  const buttonElement = screen.getByRole("button", {
    name: "Test button",
    exact: false,
  });
  expect(buttonElement).toBeInTheDocument();
});
