import { useState } from "react";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { useGetOverview } from "../../Hooks/Query/Admin/useGetOverview";
import { useForm } from "react-hook-form";
import { IAdminData } from "../../Services/Admin/getOverview";
import { AdminTable } from "./AdminTable";

interface IAdminForm {
   password: string;
   name: string;
}

export const Admin = (): JSX.Element => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
      setError,
   } = useForm<IAdminForm>();

   const [isAuth, setIsAuth] = useState(false);

   const { getOverview, isPending } = useGetOverview();
   const [overviewData, setOverviewData] = useState<IAdminData | null>(null);

   async function formSubmit(data: IAdminForm) {
      getOverview(data, {
         onSettled(_data, error) {
            if (error) {
               console.log(error);
               setError("root", { message: error.message });
            }
         },
         onSuccess(response) {
            if (typeof response.message == "string") {
               return response;
            }
            setIsAuth(true);
            setOverviewData(response);
            reset();
         },
         onError(error) {
            console.error("Auth failed", error);
            setError("root", { message: error.message });
            setIsAuth(false);
         },
      });
   }

   if (isAuth) {
      return (
         <div>
            <AdminTable data={overviewData} />
         </div>
      );
   }

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
            {errors.root ? (
               <span className="text-red-600">{errors.root.message}</span>
            ) : (
               ""
            )}
            <CustomBtn
               type="submit"
               disabled={isSubmitting || isPending}
               className="w-full mt-2"
               btnText={
                  isSubmitting || isPending
                     ? "Wird gesendet..."
                     : "Nachricht senden"
               }
            ></CustomBtn>
         </form>
      </div>
   );
};
