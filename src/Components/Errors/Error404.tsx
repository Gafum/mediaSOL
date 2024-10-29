import { useNavigate } from "react-router-dom";
import CustomBtn from "../../UI/CustomBtn/CustomBtn";

function Error404(): JSX.Element {
   let navigate = useNavigate()

   return (
      <div className="flex justify-center items-center gap-9 flex-col h-1/2">
         <h1 className="font-semibold text-4xl">Page is not found</h1>
         <CustomBtn btnText="GO HOME" onClick={() => navigate("/")} className="max-w-[400px] min-w-[200px] w-full" />
      </div>
   );
}

export default Error404;