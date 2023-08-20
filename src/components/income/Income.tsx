import { Typography } from "@mui/material";
import Title from "../title/Title";
import { mapDate } from "../../utils/map-date";

interface IncomeProps {
    amount: number;
    date: string;
}

const Income = ({ amount, date }: IncomeProps) => {
    return <>
        <Title>Recent Deposits</Title>
        <Typography component="p" variant="h4">
            {amount}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
            {mapDate(date) || ""}
        </Typography>
    </>;
}

export default Income;