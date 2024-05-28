import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { Universities } from "./Universities";
import { Students } from "./Students";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Universities />} />
        <Route path="universities/:id" element={<Students />}>
          <Route path="add" element={<AddStudent />} />
          <Route path="edit/:id" element={<EditStudent />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
