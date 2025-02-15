import React from "react";
import ActivityBlock from "./ActivityBlock";
interface PromotionActivityBlockProps {
  data: {
    value: number; 
  };
}
export default function PromotionActivityBlock({
  data,
}: PromotionActivityBlockProps) {
  const percentage = data.value;
  const success = percentage > 5;
  const normalizedPercentage = percentage / 10;

  const getColor = (percent: number) => {
    const hue = 120 - percent * 120;
    return `hsl(${hue}, 100%, 50%)`;
  };

  const startColor = getColor(1 - normalizedPercentage);
  const endColor = getColor(1 - (normalizedPercentage + 0.2));

  const thumbColor = getColor(1 - normalizedPercentage);

  return (
    <ActivityBlock title="Активность продвижения">
      <div className="flex items-center">
        <p className="text-xl font-bold">
          {percentage} <span className="text-gray-500">/ 10</span>
        </p>
        <span className="ml-2 text-gray-500 text-xs">За 7 дней</span>
      </div>
      <div className="w-full mt-2">
        <div className="w-full bg-gray-200 rounded-full h-3  relative">
          <div
            className="h-3 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${startColor}, ${endColor})`,
            }}
          ></div>

          <div
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full shadow-md transition-all duration-300"
            style={{
              left: `${(percentage / 10) * 100}%`,
              transform: "translate(-50%, -50%)",
              backgroundColor: "#FFFFFF",
              border: `6px solid ${thumbColor}`,
            }}
          ></div>
        </div>
      </div>
      <p className="font-bold mt-3 text-sm">
        {success ? "Вы молодец!" : "Проданные обновления."}
      </p>
      <p className="text-gray-500 text-xs mt-2">
        {success
          ? "Вы гораздое успешнее своих конкурентов"
          : "Конкуренты активнее, чем вы."}
      </p>
    </ActivityBlock>
  );
}
