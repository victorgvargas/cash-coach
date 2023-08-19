import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe('#Title', () => {
    it('should render the proper title', () => {
        render(<Title children="<h3>Title</h3>"/>);
        expect(screen.getByText("Title")).toBeInTheDocument();
    });
});