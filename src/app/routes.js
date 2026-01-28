import CaregiverInsurancePage from "../pages/CaregiverInsurancePage";
import ChildInsurancePage from "../pages/ChildInsurancePage";

export const ROUTES = [
  {
    path: "/",
    element: <CaregiverInsurancePage />,
    label: "간병보험",
  },
  {
    path: "/caregiver",
    element: <CaregiverInsurancePage />,
    label: "간병보험",
  },
  {
    path: "/child",
    element: <ChildInsurancePage />,
    label: "어린이보험",
  },
];

export const PATHS = {
  home: "/",
  caregiver: "/caregiver",
  child: "/child",
};
