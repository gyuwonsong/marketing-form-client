import CancerHero from "../components/sections/CancerHero";
import ProductCompare from "../components/sections/ProductCompare";
import ComplianceNotice from "../components/common/ComplianceNotice";
import FloatingCTA from "../components/sections/FloatingCTA";

export default function CancerInsurancePage() {
  return (
    <>
      <CancerHero />
      <ProductCompare variant="CANCER" />
      <ComplianceNotice />
      <FloatingCTA variant="CANCER" />
    </>
  );
}

// 암보험
