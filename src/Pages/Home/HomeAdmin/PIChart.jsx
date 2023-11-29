import { useEffect, useState } from "react";
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";
import useSingleUser from "../../../hooks/useSingleUser";
import useAllAsset from "../../../hooks/useAllAsset";
import { PieChart, Pie, Cell, Label, Legend } from "recharts";

const PIChart = ({ children }) => {
  const user = useSingleUser();
  const [nonReturnable, setNonReturnable] = useState([]);
  const [returnable, setReturnable] = useState([]);
  const allAsset = useAllAsset();
  useEffect(() => {
    const returnable = allAsset.filter(
      (asset) => user.email === asset.owner && asset.type === "returnable"
    );
    const non_returnable = allAsset.filter(
      (asset) => user.email === asset.owner && asset.type === "non-returnable"
    );
    setReturnable(returnable);
    setNonReturnable(non_returnable);
  }, [allAsset, user.email]);

  const data = [
    { name: "Returnable", value: returnable.length },
    { name: "Non-Returnable", value: nonReturnable.length },
  ];
  // console.log(data);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="mt-20">
      <SectionHeader heading={"PI Chart"} />
      <div className="flex flex-col items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </div>
    </div>
  );
};

export default PIChart;
