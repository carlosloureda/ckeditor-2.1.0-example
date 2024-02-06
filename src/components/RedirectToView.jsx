import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectToView = (viewPath) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("uwu: ", { viewPath });
    navigate(viewPath); // Redirige a /view
  }, [navigate, viewPath]);

  return null; // Este componente no renderiza nada
};
