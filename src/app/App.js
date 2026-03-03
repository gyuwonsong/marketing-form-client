import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ChatbotPopupPage from "../pages/ChatbotPopupPage";
import { ROUTES } from "./routes";

export default function App() {
  const layoutRoutes = ROUTES.filter((r) => r.path !== "/chatbot");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chatbot" element={<ChatbotPopupPage />} />

        <Route element={<MainLayout />}>
          {layoutRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
