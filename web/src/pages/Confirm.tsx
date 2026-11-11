import { Navigate, useLocation} from "react-router";
import  okSvg from "../assets/ok.svg";

export function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
  <div className="bg-gray-500 rouded-xl flex flex-col items-center p-10 gap-6">
    <h1 className="text-2xl font-bold text-center text-green-100">Solicitação enviada!</h1>

    <img src={okSvg} alt="Solicitação enviada com sucesso" className="w-28" />

    <p className="text-sm text-center text-gray-200">Sua solicitação de reembolso foi enviada com sucesso!</p>

    <a href="/" className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear">
      Nova Solicitação
    </a>
  </div>
  )
}
