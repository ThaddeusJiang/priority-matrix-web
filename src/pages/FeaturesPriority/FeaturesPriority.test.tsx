import { render } from "@testing-library/react";
import FeaturesPriority from "./FeaturesPriority";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("FeaturesPriority", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<FeaturesPriority />);
    }).not.toThrow();
  });
});
