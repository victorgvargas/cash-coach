import { RenderResult, cleanup, render, screen } from "@testing-library/react";
import Chart from "./Chart";

describe('#Chart', () => {
    const data = [
        {day: 1, amount: 0},
        {day: 5, amount: 300},
        {day: 10, amount: 600},
        {day: 15, amount: 800},
        {day: 20, amount: 1500},
        {day: 25, amount: 2000},
        {day: 30, amount: 2400},
    ];
    let container: HTMLElement;
    let view: RenderResult;
    
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        view = render(<Chart data={data} label="Expenses" period="June"/>);
        container = view.container;
    });
    
    it ('should create the chart', () => {
        expect(container).toBeInTheDocument();
    });
    
    it ('should display the correct data', () => {
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('300')).toBeInTheDocument();
        expect(screen.getByText('600')).toBeInTheDocument();
        expect(screen.getByText('800')).toBeInTheDocument();
        expect(screen.getByText('1500')).toBeInTheDocument();
        expect(screen.getByText('2000')).toBeInTheDocument();
        expect(screen.getByText('2400')).toBeInTheDocument();
    });
    
    it ('should display the correct label', () => {
        expect(screen.getByText("Expenses")).toBeInTheDocument();
    });
    
    it ('should display the correct axis values', () => {
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("10")).toBeInTheDocument();
        expect(screen.getByText("15")).toBeInTheDocument();
        expect(screen.getByText("20")).toBeInTheDocument();
        expect(screen.getByText("25")).toBeInTheDocument();
        expect(screen.getByText("30")).toBeInTheDocument();
    });
    
    it ('should destroy the chart', () => {
        view.unmount();
        expect(container).not.toBeInTheDocument();
    });

    afterEach(cleanup);
});