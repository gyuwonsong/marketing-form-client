import ChildHero from "../components/sections/ChildHero";
import ConsentPanel from "../components/sections/ConsentPanel";
import ProductCompare from "../components/sections/ProductCompare";
import FloatingCTA from "../components/sections/FloatingCTA";
import ComplianceNotice from "../components/common/ComplianceNotice";

export default function ChildInsurancePage() {
  return (
    <>
      <ChildHero />
      <ConsentPanel />
      <ProductCompare variant="CHILD" />
      <ComplianceNotice />
      <FloatingCTA variant="CHILD" />
    </>
  );
}
