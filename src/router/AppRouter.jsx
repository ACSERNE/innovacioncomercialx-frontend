import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Ventas from "../pages/Ventas";
import FlujoCaja from "../pages/FlujoCaja";
import Reportes from "../pages/Reportes";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<div>Registro (mañana lo hacemos)</div>} />
        <Route path="/store" element={<div>Tienda (mañana la activamos)</div>} />

        {/* RUTAS PRIVADAS */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/ventas"
          element={
            <PrivateRoute>
              <Layout>
                <Ventas />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/flujo-caja"
          element={
            <PrivateRoute>
              <Layout>
                <FlujoCaja />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/reportes"
          element={
            <PrivateRoute>
              <Layout>
                <Reportes />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
