import DiagnosisHero from "../components/diagnosis/DiagnosisHero";
import DiagnosisContent from "../components/diagnosis/DiagnosisContent";
import ComplianceNotice from "../components/common/ComplianceNotice";

export default function DiagnosisPage() {
  return (
    <>
      <DiagnosisHero />
      <DiagnosisContent />
      <ComplianceNotice />
    </>
  );
}
