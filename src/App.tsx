import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import { LocaleProvider } from "./context/Locale";
export default function App() {
  return (
    <LocaleProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LocaleProvider>
  );
}
