import "./pie.scss";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Batch 1", value: 300 },
  { name: "Batch 2", value: 200 },
  { name: "Batch 3", value: 150 },
  { name: "Batch 4", value: 50 },
  { name: "Batch 5", value: 80 },
  { name: "Batch 6", value: 250 },
];

const data02 = [
  { name: "Batch A", value: 400 },
  { name: "Batch B", value: 567 },
  { name: "Batch C", value: 398 },
  { name: "Batch D", value: 200 },
  { name: "Batch E", value: 88 },
  { name: "Batch F", value: 80 },
];
const pie = () => {
  return (
    <div className="pie">
      <div className="title">Last 6 months traffic (FS vs DS&A)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={data02}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default pie;
