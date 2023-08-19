import { RenderResult, cleanup, render, screen } from "@testing-library/react";
import Income from "./Income";

describe("#Income", () => {
    let view: RenderResult;
    let container: HTMLElement;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        view = render(<Income amount={1000} date="19/08/2023"/>);
        container = view.container;
    });

    it('should display the component', () => {
        expect(container).toBeInTheDocument();
    });

    it('should display the correct income', () => {
        expect(screen.getByText("1000")).toBeInTheDocument();
    });

    it('should display the correct date', () => {
        expect(screen.getByText("19 August, 2023")).toBeInTheDocument();
    });

    afterEach(cleanup);
});