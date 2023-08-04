import { screen, render } from "test-utils";
import ErrorComp, { defaultErrorMsg } from "./ErrorComp";

describe("ErrorComp", () => {
  test("Does default error message show", () => {
    render(<ErrorComp children={<div />} isError />);
    const comp = screen.getByText(defaultErrorMsg);
    expect(comp).toBeInTheDocument();
  });
  test("Does error message show when passed in", () => {
    const msg = "Something went wrong";
    render(<ErrorComp message={msg} children={<div />} isError />);
    const comp = screen.getByText(msg);
    expect(comp).toBeInTheDocument();
  });
  test("Image renders correctly when prop is passed in", () => {
    const img = "/assets/404.jpg";
    render(<ErrorComp img={img} children={<div />} isError />);
    const comp = screen.getByRole("img");
    expect(comp).toBeInTheDocument();
    expect(comp).toHaveAttribute("alt");
    expect(comp).toHaveAttribute("src");
  });
  test("Image is not present when the prop is not passed in", () => {
    render(<ErrorComp children={<div />} isError />);
    const comp = screen.queryByRole("img");
    expect(comp).not.toBeInTheDocument();
  });
  test("Link renders correctly when prop is passed in", () => {
    const url = "/";
    const text = "Go home";
    render(<ErrorComp link={{ text, url }} children={<div />} isError />);
    const comp = screen.getByRole("link");
    expect(comp).toBeInTheDocument();
    expect(comp).toHaveAttribute("href", url);
    expect(comp).toHaveTextContent(text);
  });
  test("Link is not present when the prop is not passed in", () => {
    render(<ErrorComp children={<div />} isError />);
    const comp = screen.queryByRole("link");
    expect(comp).not.toBeInTheDocument();
  });
});
