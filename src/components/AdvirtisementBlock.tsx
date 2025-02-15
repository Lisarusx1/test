import ActivityBlock from "./ActivityBlock";
interface AdvertisementBlockProps {
  data: {
    active: number;
    notActive: number;
    draft: number;
    sold: number;
  };
}
export default function AdvertisementBlock({ data }: AdvertisementBlockProps) {
  const ArrowLeft = () => {
    return <span className="text-gray-400 ml-1 cursor-pointer">{`>`}</span>;
  };

  return (
    <ActivityBlock title="Объявления">
      <table className="w-full text-xs">
        <tbody>
          <tr>
            <td className="py-3 text-gray-500 flex items-center gap-[6px] ">
              <span className="h-2 w-2 rounded-[50%] bg-[#74B200]"></span>
              Активные
            </td>
            <td className="text-right py-3 font-bold">
              {data.active} <ArrowLeft />
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-3 text-gray-500 flex items-center gap-[6px]">
              <span className="h-2 w-2 rounded-[50%] bg-[#FF9F31]"></span>Не
              активные
            </td>
            <td className="text-right py-3 font-bold">
              {data.notActive} <ArrowLeft />
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-3 text-gray-500 flex items-center gap-[6px]">
              <span className="h-2 w-2 rounded-[50%] bg-[#636570]"></span>
              Черновики
            </td>
            <td className="text-right py-3 font-bold">
              {data.draft} <ArrowLeft />
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-3 text-gray-500 flex items-center gap-[6px]">
              <span className="h-2 w-2 rounded-[50%] bg-[#898B94]"></span>
              Проданные
            </td>
            <td className="text-right py-3 font-bold">
              {data.sold}
              <ArrowLeft />
            </td>
          </tr>
        </tbody>
      </table>
    </ActivityBlock>
  );
}
