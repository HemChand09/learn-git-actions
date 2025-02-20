import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
    test("renders h1 tag with correct text", () => {
        render(<App />);
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toBeInTheDocument();
    });
});
