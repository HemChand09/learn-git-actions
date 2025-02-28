import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";



test("Testing React First Case ", () => {
    render(<App />);
    const isThere = screen.getByText(/First React Test Case/i);
    const isTitle = screen.getByTitle("This is Image");
    expect(isThere).toBeInTheDocument();
    expect(isTitle).toBeInTheDocument();
});


test("Testing input box", () => {
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

describe.skip("checking The describe", () => {
    test("UI testing", () => {
        render(<App />);
        const isTextBox = screen.getByRole("textbox");
        expect(isTextBox).toHaveAttribute("type", "text");

    });
    test("UI testing 1", () => {
        render(<App />);
        const isTextBox = screen.getByRole("textbox");
        expect(isTextBox).toHaveAttribute("type", "text");

    });
});

describe("API checking The describe", () => {
    test("API testing", () => {
        render(<App />);
        const isTextBox = screen.getByRole("textbox");
        expect(isTextBox).toHaveAttribute("type", "text");

    });
    test("API testing 1", () => {
        render(<App />);
        const isTextBox = screen.getByRole("textbox");
        expect(isTextBox).toHaveAttribute("type", "text");

    });
    describe("Inner Describe", () => {
        test("API testing 1 inner", () => {
            render(<App />);
            const isTextBox = screen.getByRole("textbox");
            expect(isTextBox).toHaveAttribute("type", "text");

        });
    });
});