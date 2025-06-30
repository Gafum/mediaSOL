import { SyntheticEvent, useState } from "react";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";

export const Admin = (): JSX.Element => {
   const [isAuth, setIsAuth] = useState(false);

   function formSubmit(event: SyntheticEvent) {
      event?.preventDefault();
      setIsAuth(true);
   }

   if (isAuth) {
      return (
         <div>
            Table Main
            <table>
               <tr>
                  <td>First</td>
                  <td>Second</td>
               </tr>
            </table>
         </div>
      );
   }

   return (
      <div className="w-full flex flex-col items-center justify-center">
         <h2 className="font-semibold text-xl">Login</h2>
         <form onSubmit={formSubmit}>
            <div className="inputes">
               <input type="text" id="loginInput" required />
               <label htmlFor="loginInput">Name</label>
            </div>
            <div className="inputes">
               <input type="password" id="loginInput" required />
               <label htmlFor="loginInput">Passwort</label>
            </div>
            <CustomBtn
               btnText={"Submit"}
               type="submit"
               className="w-full mt-3"
            />
         </form>
      </div>
   );
};
