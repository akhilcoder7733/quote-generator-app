// src/App.jsx
import { useEffect, useState } from "react";
import LayoutRoutes from "./routes/LayoutRoutes";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 3000);
  return () => clearTimeout(timer);
}, []);

  return <>{loading ? <SplashScreen /> : <LayoutRoutes />}</>;
}

export default App;
