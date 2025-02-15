import React from "react";
import ActivityBlock from "./ActivityBlock";
interface ServiceLevelBlockProps {
  data: {
    value: number;
  };
}

export default function ServiceLevelBlock({ data }: ServiceLevelBlockProps) {
  const percentage = data.value;
  const success = percentage > 40;
  const normalizedPercentage = percentage / 100;

  const getColor = (percent: number) => {
    const hue = 120 - percent * 120;
    return `hsl(${hue}, 100%, 50%)`;
  };

  const startColor = getColor(1 - normalizedPercentage);
  const endColor = getColor(1 - (normalizedPercentage + 0.2));

  const thumbColor = getColor(1 - normalizedPercentage);

  return (
    <ActivityBlock title="Уровень сервиса">
      <div className="flex items-center mt-2">
        <span className="text-xl font-bold">{percentage}%</span>
        <span className="ml-2 text-gray-500 text-xs">За 30 дней</span>
      </div>

      <div className="w-full mt-2">
        <div className="w-full bg-gray-200 rounded-full w-full h-3 relative">
          <div
            className="h-3 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${startColor}, ${endColor})`,
            }}
          ></div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full shadow-md transition-all duration-300"
            style={{
              left: `${percentage}%`,
              transform: "translate(-50%, -50%)",
              backgroundColor: "#FFFFFF",
              border: `6px solid ${thumbColor}`,
            }}
          ></div>
        </div>
      </div>
      <p className="font-bold mt-3 text-sm">
        {success ? "У вас высокий уровень." : "У вас низкий уровень"}
      </p>
      <p className="text-gray-500 text-xs mt-2">
        {success
          ? "Спасибо, что следуете правилам, — за это положены преимущества."
          : "Следуйте правилам, — за это положены преимущества."}
      </p>
    </ActivityBlock>
  );
}
