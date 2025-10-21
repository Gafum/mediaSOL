import { splitWordsSmart } from "../../../../Function/splitWords";
import { ISchemaColumn } from "../../../../Services/Admin/getData";
import { CustomBtn } from "../../../../UI/CustomBtn/CustomBtn";
import { useAdminCreateForm } from "./useAdminCreateForm";

interface IAdminCreateFormProps {
   adminDataSchema: ISchemaColumn[];
   submitCallback: (data: Record<string, any>) => void;
   setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminCreateForm = ({
   adminDataSchema,
   submitCallback,
   setIsEditFormVisible,
}: IAdminCreateFormProps): JSX.Element => {
   const { register, onSubmit, errors, isSubmitting, isPending } =
      useAdminCreateForm({ adminDataSchema, submitCallback });

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
                  ) : (
                     <input
                        type={inputType}
                        required
                        autoComplete="off"
                        id={e.column_name + "_inputID"}
                        {...register(e.column_name, {
                           required: `${splitWordsSmart(e.column_name)} is required`,
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
            disabled={isPending || isSubmitting}
            btnText={isPending ? "Loading..." : "Add"}
         />
      </form>
   );
};
