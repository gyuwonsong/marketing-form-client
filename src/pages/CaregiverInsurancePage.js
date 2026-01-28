import CaregiverHero from "../components/sections/CaregiverHero";
import ProductCompare from "../components/sections/ProductCompare";
import ConsentPanel from "../components/sections/ConsentPanel";
import FloatingCTA from "../components/sections/FloatingCTA";
import ComplianceNotice from "../components/common/ComplianceNotice";

export default function CaregiverInsurancePage() {
  return (
    <>
      <CaregiverHero />
      <ConsentPanel />
      <ProductCompare />
      <ComplianceNotice />
      <FloatingCTA />
    </>
  );
}
