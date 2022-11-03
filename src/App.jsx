import "./App.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Timeline } from "./pages/Timeline"
import { Classification } from "./pages/Classification";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/timeline"} />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/classification" element={<Classification />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App