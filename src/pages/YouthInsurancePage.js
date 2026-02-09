import YouthHero from "../components/sections/YouthHero";
import ProductCompare from "../components/sections/ProductCompare";
import ComplianceNotice from "../components/common/ComplianceNotice";
import FloatingCTA from "../components/sections/FloatingCTA";

export default function YouthInsurancePage() {
  return (
    <>
      <YouthHero />
      <ProductCompare variant="YOUTH" />
      <ComplianceNotice />
      <FloatingCTA variant="YOUTH" />
    </>
  );
}

// 청년보험
