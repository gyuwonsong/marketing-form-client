import SimpleHero from "../components/sections/SimpleHero";
import ProductCompare from "../components/sections/ProductCompare";
import ComplianceNotice from "../components/common/ComplianceNotice";
import FloatingCTA from "../components/sections/FloatingCTA";

export default function SimpleInsurancePage() {
  return (
    <>
      <SimpleHero />
      <ProductCompare variant="SIMPLE" />
      <ComplianceNotice />
      <FloatingCTA variant="SIMPLE" />
    </>
  );
}

// 간편보험
