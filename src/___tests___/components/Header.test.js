import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";

describe("Header", () => {
  it("should render the same text render into title prop", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);

    expect(headingElement).toBeInTheDocument();
  });
});
