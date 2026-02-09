import DementiaCareHero from "../components/sections/DementiaCareHero";
import ProductCompare from "../components/sections/ProductCompare";
import ComplianceNotice from "../components/common/ComplianceNotice";
import FloatingCTA from "../components/sections/FloatingCTA";

export default function DementiaCareInsurancePage() {
  return (
    <>
      <DementiaCareHero />
      <ProductCompare variant="DEMENTIA_CARE" />
      <ComplianceNotice />
      <FloatingCTA variant="DEMENTIA_CARE" />
    </>
  );
}

// 치매간병보험
