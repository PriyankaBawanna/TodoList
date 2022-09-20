import { render, screen } from "@testing-library/react";
import CommentList from "../CommentList";

test("initial when Comment Are not available ", () => {
  render(<CommentList allcomments={[]} />);
  const h2Element = screen.getByText("no Comments", { exact: false });
  expect(h2Element).toBeInTheDocument();
});

test("List all Comments", () => {
  render(
    <CommentList
      allcomments={[
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
      ]}
    />
  );
  const h2Element = screen.queryByText("no Comments", { exact: false });
  expect(h2Element).not.toBeInTheDocument();

  //   expect(screen.getByText("Comment 1")).toBeInTheDocument();
  //   expect(screen.getByText("comment 2")).toBeInTheDocument();

  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(2);
});
