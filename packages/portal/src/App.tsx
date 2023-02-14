import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { ToastProvider } from "./context/toast";
import Login from "./pages/login";
import { PrivateRoute, PublicRouter } from "./router/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastProvider>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route element={<PrivateRoute />} path="*" />
            <Route element={<PublicRouter />}>
              <Route element={<Login />} path="/login" />
            </Route>
          </Routes>
        </AnimatePresence>
        </ToastProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
