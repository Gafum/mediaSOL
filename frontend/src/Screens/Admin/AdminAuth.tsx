import { useForm } from "react-hook-form";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { useEffect } from "react";
import { IAdminForm } from "./Admin";

interface IAdminAuthProps {
   userData: IAdminForm;
   setUserData: React.Dispatch<React.SetStateAction<IAdminForm>>;
}

export const AdminAuth = ({
   userData,
   setUserData,
}: IAdminAuthProps): JSX.Element => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setError,
   } = useForm<IAdminForm>();

   async function formSubmit(data: IAdminForm) {
      setUserData({ ...data, isDataSend: true });
   }

   useEffect(() => {
      if (userData.errors) {
         if (userData.errors.name) {
            setError("name", { message: "incorect Name" });
         } else {
            setError("password", { message: "incorect password" });
         }
      }
   }, [userData]);

   return (
      <div className="w-full flex flex-col items-center justify-center">
         <h2 className="font-semibold text-xl">Login</h2>
         <form onSubmit={handleSubmit(formSubmit)}>
            <div className="inputes">
               <input
                  type="text"
                  id="loginInput"
                  required
                  {...register("name", { required: "Name ist erforderlich" })}
                  className={errors.name && "incorrect"}
               />
               <label htmlFor="loginInput">Name</label>
            </div>
            <div className="inputes">
               <input
                  type="password"
                  id="loginInput"
                  required
                  {...register("password", {
                     required: "Passwort ist erforderlich",
                  })}
                  className={errors.password && "incorrect"}
               />
               <label htmlFor="loginInput">Passwort</label>
            </div>
            <CustomBtn
               type="submit"
               disabled={isSubmitting}
               className="w-full mt-2"
               btnText="Anmelden"
            ></CustomBtn>
         </form>
      </div>
   );
};
