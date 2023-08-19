import { Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Title from "../title/Title";

interface ChartProps {
    data: {day: number, amount: number}[],
    label: string;
    period: string;
}

const Chart = ({ data, label, period }: ChartProps) => {    
    return <>
        <Title>{ period }</Title>
        <ResponsiveContainer width='100%' height={400}>
            <LineChart
                data={data}
                margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24,
                  }}
            >
                <XAxis 
                    dataKey="day"
                />
                <YAxis>
                  <Label
                    angle={270}
                    position={"left"}
                    style={{ textAnchor: 'middle' }}
                  >
                    { label }
                  </Label>
                </YAxis>
                <Line 
                    isAnimationActive={false}
                    type="monotone"
                    dataKey="amount"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    </>;
}

export default Chart;