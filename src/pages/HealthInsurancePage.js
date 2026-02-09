import HealthHero from "../components/sections/HealthHero";
import ProductCompare from "../components/sections/ProductCompare";
import ComplianceNotice from "../components/common/ComplianceNotice";
import FloatingCTA from "../components/sections/FloatingCTA";

export default function HealthInsurancePage() {
  return (
    <>
      <HealthHero />
      <ProductCompare variant="HEALTH" />
      <ComplianceNotice />
      <FloatingCTA variant="HEALTH" />
    </>
  );
}

// 건강보험
