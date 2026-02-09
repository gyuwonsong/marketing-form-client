import MedicalHero from "../components/sections/MedicalHero";
import ProductCompare from "../components/sections/ProductCompare";
import ComplianceNotice from "../components/common/ComplianceNotice";
import FloatingCTA from "../components/sections/FloatingCTA";

export default function MedicalInsurancePage() {
  return (
    <>
      <MedicalHero />
      <ProductCompare variant="MEDICAL" />
      <ComplianceNotice />
      <FloatingCTA variant="MEDICAL" />
    </>
  );
}

// 실비보험
