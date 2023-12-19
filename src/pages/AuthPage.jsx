import authScreenAtom from "../atoms/authAtom.js";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import { useRecoilValue } from "recoil";
function AuthPage() {
  const authScreenState = useRecoilValue(authScreenAtom);
  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
}

export default AuthPage;
