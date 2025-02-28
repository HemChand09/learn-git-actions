import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";



test("Other Testing React First Case ", () => {
    render(<App />);
    const isThere = screen.getByText(/First React Test Case/i);
    const isTitle = screen.getByTitle("This is Image");
    expect(isThere).toBeInTheDocument();
    expect(isTitle).toBeInTheDocument();
});


test("Other Testing input box", () => {
    render(<App />);
    const isTextBox = screen.getByRole("textbox");
    const isImage = screen.getByRole("img");
    expect(isTextBox).toBeInTheDocument();
    expect(isImage).toBeInTheDocument();
    expect(isTextBox).toHaveAttribute("name", "userName");
    expect(isTextBox).toHaveAttribute("id", "myInputFiled");
    expect(isTextBox).toHaveAttribute("type", "text");
    expect(isTextBox).toHaveAttribute("value", "HemChand");
});   