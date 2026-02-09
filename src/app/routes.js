import CaregiverInsurancePage from "../pages/CaregiverInsurancePage";
import ChildInsurancePage from "../pages/ChildInsurancePage";
import FetusInsurancePage from "../pages/FetusInsurancePage";

import CancerInsurancePage from "../pages/CancerInsurancePage";
import HealthInsurancePage from "../pages/HealthInsurancePage";
import SimpleInsurancePage from "../pages/SimpleInsurancePage";
import MedicalInsurancePage from "../pages/MedicalInsurancePage";
import YouthInsurancePage from "../pages/YouthInsurancePage";
import DementiaCareInsurancePage from "../pages/DementiaCareInsurancePage";

export const ROUTES = [
  { path: "/", element: <CaregiverInsurancePage />, label: "간병보험" },
  {
    path: "/caregiver",
    element: <CaregiverInsurancePage />,
    label: "간병보험",
  },
  { path: "/child", element: <ChildInsurancePage />, label: "어린이보험" },
  { path: "/fetus", element: <FetusInsurancePage />, label: "태아보험" },

  { path: "/cancer", element: <CancerInsurancePage />, label: "암보험" },
  { path: "/health", element: <HealthInsurancePage />, label: "종합건강보험" },
  { path: "/simple", element: <SimpleInsurancePage />, label: "간편보험" },
  { path: "/medical", element: <MedicalInsurancePage />, label: "실비보험" },
  { path: "/youth", element: <YouthInsurancePage />, label: "청년보험" },
  {
    path: "/dementia-care",
    element: <DementiaCareInsurancePage />,
    label: "치매간병보험",
  },
];

export const PATHS = {
  home: "/",
  caregiver: "/caregiver",
  child: "/child",
  fetus: "/fetus",

  cancer: "/cancer",
  health: "/health",
  simple: "/simple",
  medical: "/medical",
  youth: "/youth",
  dementiaCare: "/dementia-care",
};
