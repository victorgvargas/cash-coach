interface Data {
    date: string;
    receiver: string;
    amount: number;
}

interface ExpensesProps {
    data: Data[];
}

const Expenses = ({ data }: ExpensesProps) => {
    return <></>;
}

export default Expenses;