import IncomeBlock from "@/components/IncomeBlock";
import ServiceLevelBlock from "@/components/ServiceLevelBlock";
import PromotionActivityBlock from "@/components/PromotionActivityBlock";
import AdvertisementBlock from "@/components/AdvirtisementBlock";
import { fetchData } from "@/lib/api";

const BlocksPage = async () => {
  const { serviceLevel, promotionActivity, income, advertisements } =
    await fetchData();
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 mt-6 mx-auto">
      <IncomeBlock data={income} />
      <AdvertisementBlock data={advertisements} />
      <ServiceLevelBlock data={serviceLevel} />
      <PromotionActivityBlock data={promotionActivity} />
    </div>
  );
};

export default BlocksPage;
