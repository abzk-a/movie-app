import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./pages/Dashboard";

const movies = [
  // ...same sample movies
];

export default function App() {
  const [page, setPage] = useState("welcome");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {page === "welcome" && <WelcomeScreen onGetStarted={() => setPage("login")} />}
      {page === "login" && <LoginPage onLogin={() => setPage("dashboard")} onSignup={() => setPage("signup")} />}
      {page === "signup" && <SignupPage onSignup={() => setPage("dashboard")} onBack={() => setPage("login")} />}
      {page === "dashboard" && <Dashboard movies={movies} />}
    </ThemeProvider>
  );
}
