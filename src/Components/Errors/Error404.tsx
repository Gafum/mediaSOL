import { useNavigate } from "react-router-dom"
import CustomBtn from "../../UI/CustomBtn/CustomBtn"
import { screenList } from "../../Routing/RoutingList"

function Error404(): JSX.Element {
   let navigate = useNavigate()

   return (
      <div className="flex justify-center items-center gap-9 flex-col h-1/2">
         <h1 className="font-semibold text-4xl">Keine Seite gefunden...</h1>
         <CustomBtn
            btnText={screenList.home.name}
            onClick={() => navigate("/")}
            className="max-w-[400px] min-w-[200px] w-full"
         />
      </div>
   )
}

export default Error404
