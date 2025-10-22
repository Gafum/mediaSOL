import { useForm } from "react-hook-form";
import { ISchemaColumn } from "../../../../Services/Admin/getData"; // приклад імпорту, зміни шлях під себе
import { IEncryptedData } from "../AdminTableRendering";
import { useCreateElement } from "../../../../Hooks/Query/Admin/useCreateElemenet";

interface UseAdminFormProps {
   adminDataSchema: ISchemaColumn[];
   encryptedData: IEncryptedData;
   setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
   showThisToast: (message: string) => void;
   adminDataMeta: any;
}

export const useAdminCreateForm = ({
   adminDataSchema,
   encryptedData,
   setIsEditFormVisible,
   showThisToast,
   adminDataMeta,
}: UseAdminFormProps) => {
   const { createElement } = useCreateElement(encryptedData);

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      control,
      setError,
   } = useForm<Record<string, any>>({
      defaultValues: adminDataSchema.reduce(
         (acc, field) => {
            acc[field.column_name] = field.isRequired ? "" : undefined;
            return acc;
         },
         {} as Record<string, any>
      ),
   });

   const onSubmit = handleSubmit(async (data) => {
      for (const elem in data) {
         if (data[elem] == "") {
            delete data[elem];
         }
      }

      createElement(
         {
            newElement: data,
            route: adminDataMeta?.router,
         },
         {
            onSettled(data, error) {
               if (Boolean(error)) {
                  setError("root", { message: error?.message ?? "error" });
                  showThisToast("error during the adding " + error?.message);
               } else if ("message" in data) {
                  setError("root", {
                     type: "required",
                     message: data.message,
                  });
                  showThisToast("error during the adding " + data.message);
               } else {
                  showThisToast("Elemment is Added");
                  setIsEditFormVisible(false);
               }
            },
            onError(error) {
               console.log(error);
            },
         }
      );
   });

   return {
      register,
      handleSubmit,
      onSubmit,
      errors,
      isSubmitting,
      control,
   };
};
