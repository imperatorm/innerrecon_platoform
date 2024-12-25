import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ThinkerProfile from "./components/ThinkerProfile";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thinker/:id" element={<ThinkerProfile />} />
      </Routes>
    </Suspense>
  );
}

export default App;
