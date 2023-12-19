import "./App.css";
import userAtom from "./atoms/userAtom";
import { Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CreateContact from "./components/CreateContact";

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <Container maxW="1600px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />
      </Routes>
      {user && <CreateContact />}
    </Container>
  );
}

export default App;
