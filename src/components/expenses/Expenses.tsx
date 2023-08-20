import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Title from "../title/Title";

interface Data {
    id: number;
    date: string;
    receiver: string;
    amount: number;
}

interface ExpensesProps {
    data: Data[];
}

const Expenses = ({ data }: ExpensesProps) => {
    return <>
        <Title>Expenses</Title>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Receiver</TableCell>
                    <TableCell align="right">Amounts</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.receiver}</TableCell>
                        <TableCell align="right">{`$${row.amount}`}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </>;
}

export default Expenses;