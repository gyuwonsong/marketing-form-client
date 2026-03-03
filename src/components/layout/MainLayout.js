import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import ChatbotLauncher from "../chatbot/ChatbotLauncher";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/*<ChatbotLauncher />*/}
    </div>
  );
}
