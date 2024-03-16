import AuthModal from "../components/AuthModal";
import "../assets/css/Auth.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  return (
    <section className={`bg relative min-h-lvh`}>
      <div className="absolute inset-0 backdrop-blur-3xl grid place-items-center">
        <AuthModal />
      </div>
    </section>
  );
};

export default Auth;
