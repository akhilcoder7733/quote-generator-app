import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import PageWrapper from "../routes/PageWrapper";
import QuoteGenerator from "../pages/QuoteGenerator";
import Contact from "../pages/Contact";

const LayoutRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
            }
          />
          <Route
            path="/quote-generator-app"
            element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </PrivateRoute>
            }
          />
          <Route
            path="/quote-generator"
            element={
              <PrivateRoute>
                <PageWrapper>
                  <QuoteGenerator />
                </PageWrapper>
              </PrivateRoute>
            }
          />

          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/login"
            element={
              <PageWrapper>
                <Login />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default LayoutRoutes;
