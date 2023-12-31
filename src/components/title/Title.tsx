import { Typography } from "@mui/material";

interface TitleProps {
    children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
    return <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {children}
    </Typography>;
}

export default Title;