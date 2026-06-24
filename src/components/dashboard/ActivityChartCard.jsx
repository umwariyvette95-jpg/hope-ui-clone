import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { activityChartData } from "../../data/dashboardData";


export default function ActivityChartCard() {
  return (
    <div className="bg-white rounded-card shadow-card border border-bordercolor p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-section-title text-headingcolor">Activity Chart</h2>
        <button
          type="button"
          className="text-sm text-bodycolor border border-bordercolor rounded-md px-3 py-1.5"
        >
          This year
        </button>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={activityChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid stroke="#E4E6EF" strokeDasharray="4 4" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#5A6A85", fontSize: 12 }}
          />
          <YAxis
            tickFormatter={(v) => `${v} GB`}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#5A6A85", fontSize: 12 }}
            domain={[30, 90]}
          />
          <Tooltip formatter={(value) => [`${value} GB`, "Usage"]} />
          <Line
            type="monotone"
            dataKey="gb"
            stroke="#3A57E8"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5, fill: "#3A57E8" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
