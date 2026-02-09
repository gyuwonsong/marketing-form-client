import FetusHero from "../components/sections/FetusHero";
import ConsentPanel from "../components/sections/ConsentPanel";
import ProductCompare from "../components/sections/ProductCompare";
import ComplianceNotice from "../components/common/ComplianceNotice";
import FloatingCTA from "../components/sections/FloatingCTA";

export default function FetusInsurancePage() {
  return (
    <>
      <FetusHero />
      <ConsentPanel />
      <ProductCompare variant="FETUS" />
      <ComplianceNotice />
      <FloatingCTA variant="FETUS" />
    </>
  );
}

// 태아보험
