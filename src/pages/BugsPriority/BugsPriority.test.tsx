import { render } from "@testing-library/react";
import BugsPriority from "./BugsPriority";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("BugsPriority", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<BugsPriority />);
    }).not.toThrow();
  });
});
