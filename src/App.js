import "./App.css";
import { Films } from "./pages/Films";
import { People } from "./pages/People";
import { Person } from "./pages/Person";
import { Film } from "./pages/Film";
import { Planets } from "./pages/Planets";
import { Planet } from "./pages/Planet";
import { Routes, Route } from "react-router";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Films />} />
      <Route path="/film/:id" element={<Film />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:uid" element={<Person />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/planets/:id" element={<Planet />} />
    </Routes>
  );
};
