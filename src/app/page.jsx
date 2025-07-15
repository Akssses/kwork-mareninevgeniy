import History from "@/components/partials/History/History";
import ReferralTable from "@/components/partials/ReferralTable/ReferralTable";
import Reward from "@/components/partials/Reward/Reward";
import Statistics from "@/components/partials/Statistics/Statistics";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homePage container">
      <Statistics />
      <Reward />
      <ReferralTable />
      <History />
    </div>
  );
}
