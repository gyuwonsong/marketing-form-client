import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { ROUTES } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {ROUTES.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
