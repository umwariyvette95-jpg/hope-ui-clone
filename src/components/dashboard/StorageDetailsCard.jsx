import { PieChart, Pie, Cell } from "recharts";
import { storageDetails } from "../../data/dashboardData";

export default function StorageDetailsCard() {
  const { usedGB, totalGB, breakdown } = storageDetails;
  const data = [
    { name: "used", value: usedGB },
    { name: "remaining", value: totalGB - usedGB },
  ];

  return (
    <div className="bg-white rounded-card shadow-card border border-bordercolor p-5">
      <h2 className="text-section-title text-headingcolor mb-2">Storage Details</h2>

      <div className="relative flex justify-center">
        <PieChart width={200} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={95}
            dataKey="value"
            stroke="none"
          >
            <Cell fill="#3A57E8" />
            <Cell fill="#E4E6EF" />
          </Pie>
        </PieChart>
        <div className="absolute bottom-0 flex flex-col items-center text-center">
          <span className="text-2xl font-bold text-headingcolor/30">{usedGB}GB</span>
          <span className="text-primary text-sm font-medium">used of {totalGB}GB</span>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {breakdown.map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-md bg-primary-50 text-primary flex items-center justify-center shrink-0">
              <span className={`w-2.5 h-2.5 rounded-full ${row.colorClass}`} />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium text-headingcolor">{row.label}</span>
                <span className="text-bodycolor">{row.value}</span>
              </div>
              <div className="h-1.5 rounded-full bg-bodybg overflow-hidden">
                <div
                  className={`h-full rounded-full ${row.colorClass}`}
                  style={{ width: `${row.barPercent}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
