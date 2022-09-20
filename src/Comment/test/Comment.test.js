import { render, screen, fireEvent } from "@testing-library/react";

import Comment from "../Comment";
import userEvent from "@testing-library/user-event";
// first Case for Check all the element are present or Not
test("Initial case Where We check All the Element are Present or Not ", () => {
  render(<Comment />);
  //this is check for the button Present in The Document or Not
  const buttonElement = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });
  //expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeDisabled();

  //test Case For Input Box
  const CommentInput = screen.getByRole("textbox");
  expect(CommentInput).toBeInTheDocument();

  //test Case for CheckBox
  //   const checkBox = screen.getByLabelText("I agree with terms and Conditions", {
  //     exact: false,
  //   });

  //   expect(checkBox).toBeInTheDocument();

  const checkBox = screen.getByRole("checkbox");

  expect(checkBox).toBeInTheDocument();
});

//check the functionality if we type Some text in Input box  and click the Check box than button Should be enable
test("Enable Submit  button ", async () => {
  render(<Comment />);
  //this is check for the button Present in The Document or Not
  const buttonElement = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });
  const CommentInput = screen.getByRole("textbox");
  const checkBox = screen.getByRole("checkbox");

  //   fireEvent.change(CommentInput, { target: { value: "Something" } });

  await userEvent.type(CommentInput, "Something ");
  await userEvent.click(checkBox);

  //fireEvent.click(checkBox);
  expect(buttonElement).toBeEnabled();
  fireEvent.click(checkBox);
  expect(buttonElement).toBeDisabled();
});
