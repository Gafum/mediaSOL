import { useForm } from "react-hook-form";
import { useState } from "react";
import { ISchemaColumn } from "../../../../Services/Admin/getData"; // приклад імпорту, зміни шлях під себе

interface UseAdminFormProps {
   adminDataSchema: ISchemaColumn[];
   submitCallback: (data: Record<string, any>) => Promise<void> | void;
}

export const useAdminCreateForm = ({
   adminDataSchema,
   submitCallback,
}: UseAdminFormProps) => {
   const [isPending, setIsPending] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
      control,
   } = useForm<Record<string, any>>({
      defaultValues: adminDataSchema.reduce(
         (acc, field) => {
            acc[field.column_name] = "";
            return acc;
         },
         {} as Record<string, any>
      ),
   });

   const onSubmit = handleSubmit(async (data) => {
      setIsPending(true);
      try {
         await submitCallback(data);
         reset();
      } finally {
         setIsPending(false);
      }
   });

   return {
      register,
      handleSubmit,
      onSubmit,
      errors,
      isSubmitting,
      isPending,
      control,
   };
};
