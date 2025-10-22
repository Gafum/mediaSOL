import { splitWordsSmart } from "../../../../Function/splitWords";
import { ISchemaColumn } from "../../../../Services/Admin/getData";
import { CustomBtn } from "../../../../UI/CustomBtn/CustomBtn";
import { showToast } from "../../../../UI/CustomToast/CustomToast";
import { IEncryptedData } from "../AdminTableRendering";
import { useAdminCreateForm } from "./useAdminCreateForm";

interface IAdminCreateFormProps {
   adminDataSchema: ISchemaColumn[];
   setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
   encryptedData: IEncryptedData;
   adminDataMeta: any;
}

export const AdminCreateForm = ({
   adminDataSchema,
   setIsEditFormVisible,
   encryptedData,
   adminDataMeta,
}: IAdminCreateFormProps): JSX.Element => {
   const { ToastContainer, showThisToast } = showToast;
   const { register, onSubmit, errors, isSubmitting } = useAdminCreateForm({
      showThisToast,
      adminDataSchema,
      encryptedData,
      setIsEditFormVisible,
      adminDataMeta,
   });

   const getInputType = (dataType: string): string => {
      switch (true) {
         case dataType.includes("int") ||
            dataType.includes("float") ||
            dataType.includes("double"):
            return "number";
         case dataType.includes("bool"):
            return "checkbox";
         case dataType.includes("date"):
            return "date";
         default:
            return "text";
      }
   };

   return (
      <form onSubmit={onSubmit} className="mb-6 py-3 border-y">
         <h1 className="font-semibold text-md">Create New Element</h1>
         {adminDataSchema.map((e) => {
            const inputType = getInputType(e.data_type);
            return (
               <div className="inputes" key={e.column_name}>
                  {inputType === "checkbox" ? (
                     <input
                        type="checkbox"
                        id={e.column_name + "_inputID"}
                        {...register(e.column_name)}
                     />
                  ) : inputType === "text" ? (
                     <textarea
                        style={{ resize: "vertical" }}
                        required={e.isRequired}
                        autoComplete="off"
                        rows={1}
                        id={e.column_name + "_inputID"}
                        {...register(e.column_name, {
                           required: e.isRequired
                              ? `${splitWordsSmart(e.column_name)} is required`
                              : false,
                        })}
                     ></textarea>
                  ) : (
                     <input
                        type={inputType}
                        required={e.isRequired}
                        autoComplete="off"
                        id={e.column_name + "_inputID"}
                        {...register(e.column_name, {
                           required: e.isRequired
                              ? `${splitWordsSmart(e.column_name)} is required`
                              : false,
                        })}
                     />
                  )}

                  <label
                     htmlFor={e.column_name + "_inputID"}
                     className="capitalize"
                  >
                     {splitWordsSmart(e.column_name)}
                  </label>

                  {errors[e.column_name] && (
                     <p className="text-red-500 text-sm pl-1">
                        {(errors[e.column_name]?.message as string) ||
                           "Invalid input"}
                     </p>
                  )}
               </div>
            );
         })}

         {errors.root && (
            <p className="text-red-500 text-sm pl-1">
               {(errors.root?.message as string) || "Invalid input"}
            </p>
         )}

         <CustomBtn
            type="button"
            className="w-full mt-2"
            onClick={() => setIsEditFormVisible(false)}
            btnText="Cancel"
            bgColor="primaryPink"
         />

         <CustomBtn
            type="submit"
            className="w-full mt-2"
            disabled={isSubmitting}
            btnText={"Add"}
         />
         <ToastContainer />
      </form>
   );
};
