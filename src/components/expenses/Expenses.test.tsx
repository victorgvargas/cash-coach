import { RenderResult, cleanup, render, screen } from "@testing-library/react";
import Expenses from "./Expenses";

describe('#Expenses', () => {
    let view: RenderResult;
    let container: HTMLElement;
    const data = [{
        date: "20/08/2023",
        receiver: "IKEA",
        amount: 1000
    }];
    
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        view = render(<Expenses data={data}/>);
        container = view.container;
    });

    it('should render the component', () => {
        expect(container).toBeInTheDocument();
    });

    it('should render the correct data', () => {
        expect(screen.getByText("20/08/2023")).toBeInTheDocument();
        expect(screen.getByText("IKEA")).toBeInTheDocument();
        expect(screen.getByText("1000")).toBeInTheDocument();
    });

    afterEach(cleanup);
});