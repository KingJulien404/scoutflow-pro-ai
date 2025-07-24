import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

interface RadarChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  size?: "sm" | "md" | "lg";
}

const RadarChart = ({ data, size = "md" }: RadarChartProps) => {
  const sizeClasses = {
    sm: "h-32",
    md: "h-48",
    lg: "h-64"
  };

  return (
    <div className={`w-full ${sizeClasses[size]}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="90%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            background
            dataKey="value"
            cornerRadius={3}
            fill="#FFD700"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChart;