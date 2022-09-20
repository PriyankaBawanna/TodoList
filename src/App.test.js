import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Comment gets displayed after submitting ", async () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox");
  const CommentInput = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });

  await userEvent.type(CommentInput, "Comment 1");
  await userEvent.click(checkBox);
  await userEvent.click(buttonElement);

  const commentLi = screen.getByText("Comment 1", { exact: false });
  expect(commentLi).toBeInTheDocument();
});

test(" 2 Comment gets displayed after submitting ", async () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox");
  const CommentInput = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });

  await userEvent.type(CommentInput, "Comment 1");
  await userEvent.click(checkBox);
  await userEvent.click(buttonElement);

  await userEvent.type(CommentInput, "Comment 2");
  await userEvent.click(checkBox);
  await userEvent.click(buttonElement);

  const commentLi = screen.getByText("Comment 1", { exact: false });
  //expect(commentLi.length).toBe(2);
  //expect(commentLi.length).toBe(2);
});
