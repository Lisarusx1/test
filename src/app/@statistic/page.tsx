"use client";
import { useState, MouseEvent, useEffect } from "react";

type Day = {
  day: string;
  views: number;
  contacts: number;
  favorite: number;
  orders: number;
};

type Data = {
  viewsChange: number;
  contactsChange: number;
  ordersChange: number;
  days: Day[];
};

type Category = keyof Omit<Day, "day">;

type Tooltip = {
  visible: boolean;
  value: number;
  x: number;
  y: number;
};

export default function Statistic() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("views");
  const [tooltip, setTooltip] = useState<Tooltip>({
    visible: false,
    value: 0,
    x: 0,
    y: 0,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchStat = async () => {
      const response = await fetch("http://localhost:3000/api/");
      const data = await response.json();
      console.log(data);
      setData(data.statistic);
    };
    fetchStat();
  }, []);

  const getMaxValue = (category: Category): number => {
    if (!data) return 0;
    const max = Math.max(...data.days.map((day) => day[category]));
    return max === 0 ? 1 : max;
  };

  const maxValue = getMaxValue(selectedCategory);

  const handleMouseEnter = (
    value: number,
    event: MouseEvent<HTMLDivElement>
  ) => {
    setTooltip({
      visible: true,
      value: value,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, value: 0, x: 0, y: 0 });
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("progress-bars-container");
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full flex bg-white rounded-lg p-8 flex-col">
      <div className="flex flex-row justify-between w-full">
        <h1 className="font-semibold text-2xl tracking-[0]">
          Статистика за {data?.days[0].day.split(",")[0]} —{" "}
          {data?.days[6].day.split(",")[0]} дек
        </h1>
        <button className="w-[175px] h-10 rounded-lg border border-[#898B94] gap-[10px] text-[13px]">
          Больше статистики
        </button>
      </div>
      <div className="p-4 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div
            className={`p-4 border ${
              selectedCategory === "views"
                ? "border-[#8FBA3E]"
                : "border-gray-200"
            } bg-[#F6F5FA] rounded-lg cursor-pointer`}
            onClick={() => handleCategoryClick("views")}
          >
            <h3 className="font-inter font-normal text-xs leading-[16.8px] tracking-[0%] text-[#898B94]">
              Просмотры
            </h3>
            <span className="text-2xl font-semibold ">
              {data.days.reduce((acc, cur) => acc + cur.views, 0)}
            </span>
            <span
              className={`text-xs leading-[16.8px] ml-1 ${
                data.viewsChange > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.viewsChange > 0 ? "+" : ""}
              {data.viewsChange}%
            </span>
          </div>
          <div
            className={`p-4 border ${
              selectedCategory === "contacts"
                ? "border-[#8FBA3E]"
                : "border-gray-200"
            } bg-[#F6F5FA] rounded-lg cursor-pointer`}
            onClick={() => handleCategoryClick("contacts")}
          >
            <h3 className="font-inter font-normal text-xs leading-[16.8px] tracking-[0%] text-[#898B94]">
              Контакты
            </h3>
            <span className="text-2xl font-semibold">
              {data.days.reduce((acc, cur) => acc + cur.contacts, 0)}
            </span>
            <span
              className={`text-xs leading-[16.8px] ml-1 ${
                data.contactsChange > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.contactsChange > 0 ? "+" : ""}
              {data.contactsChange}%
            </span>
          </div>
          <div
            className={`p-4 border ${
              selectedCategory === "favorite"
                ? "border-[#8FBA3E]"
                : "border-gray-200"
            } bg-[#F6F5FA] rounded-lg cursor-pointer`}
            onClick={() => handleCategoryClick("favorite")}
          >
            <h3 className="font-inter font-normal text-xs leading-[16.8px] tracking-[0%] text-[#898B94]">
              Избранное
            </h3>
            <span className="text-2xl font-semibold">
              {data.days.reduce((acc, cur) => acc + cur.favorite, 0)}
            </span>
          </div>
          <div
            className={`p-4 border ${
              selectedCategory === "orders"
                ? "border-[#8FBA3E]"
                : "border-gray-200"
            } bg-[#F6F5FA] rounded-lg cursor-pointer`}
            onClick={() => handleCategoryClick("orders")}
          >
            <h3 className="font-inter font-normal text-xs leading-[16.8px] tracking-[0%] text-[#898B94]">
              Заказано товаров
            </h3>
            <span className="text-2xl font-semibold">
              {data.days.reduce((acc, cur) => acc + cur.orders, 0)}
            </span>
            <span
              className={`text-xs leading-[16.8px] ml-1 ${
                data.ordersChange > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.ordersChange > 0 ? "+" : ""}
              {data.ordersChange}%
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            className="hidden sm:flex gap-2 justify-between overflow-x-auto"
            id="progress-bars-container"
          >
            {data.days.map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-lg relative"
                  onMouseEnter={(e) =>
                    handleMouseEnter(day[selectedCategory], e)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="w-[95px] bg-[#8FBA3E] rounded-lg absolute bottom-0"
                    style={{
                      height:
                        maxValue === 1 && day[selectedCategory] === 0
                          ? "0%"
                          : `${(day[selectedCategory] / maxValue) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-inter font-normal text-xs leading-[16.8px] tracking-[0%] text-[#898B94] mt-2">
                  {day.day}
                </span>
              </div>
            ))}
          </div>
          <div className="sm:hidden flex justify-center gap-4 mt-4">
            <button
              onClick={() => handleScroll("left")}
              className="p-2 bg-[#F6F5FA] rounded-full"
            >
              {"<"}
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2 bg-[#F6F5FA] rounded-full"
            >
              {">"}
            </button>
          </div>
        </div>

        {tooltip.visible && (
          <div
            className="absolute bg-black text-white text-xs px-2 py-1 rounded"
            style={{
              top: tooltip.y - 20,
              left: tooltip.x + 10,
            }}
          >
            {tooltip.value}
          </div>
        )}
      </div>
    </div>
  );
}
