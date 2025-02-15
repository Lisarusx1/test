import React from "react";
import ActivityBlock from "./ActivityBlock";
interface IncomeBlockProps {
  data: {
    total: number;
    lastYear: number;
    lastMonth: number;
    lastWeek: number;
  };
}
export default function IncomeBlock({ data }: IncomeBlockProps) {
  return (
    <ActivityBlock title="Доходы от заказов">
      <table className="w-full text-xs">
        <tbody>
          <tr>
            <td className="py-3 text-gray-500">Всего</td>
            <td className="text-right py-3 font-bold">
              {data.total.toLocaleString()}₽
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-3 text-gray-500">За последний год</td>
            <td className="text-right py-3 font-bold">
              {data.lastYear.toLocaleString()}₽
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-3 text-gray-500">За последний месяц</td>
            <td className="text-right py-3 font-bold">
              {data.lastMonth.toLocaleString()}₽
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-3 text-gray-500">За последнюю неделю</td>
            <td className="text-right py-3 font-bold">
              {data.lastWeek.toLocaleString()}₽
            </td>
          </tr>
        </tbody>
      </table>
    </ActivityBlock>
  );
}
