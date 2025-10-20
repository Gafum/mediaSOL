import { splitWordsSmart } from "../../../../Function/splitWords";
import { ISchemaColumn } from "../../../../Services/Admin/getData";
import { CustomBtn } from "../../../../UI/CustomBtn/CustomBtn";

interface IAdminCreateFormProps {
   adminDataSchema: ISchemaColumn[];
   submitCallback: () => void;
   setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminCreateForm = ({
   adminDataSchema,
   submitCallback,
   setIsEditFormVisible,
}: IAdminCreateFormProps): JSX.Element => {
   // const {
   //    onSubmit,
   //    register,
   //    handleSubmit,
   //    errors,
   //    isSubmitting,
   //    control,
   //    isPending,
   // } = useReviewForm({ submitCallback });

   return (
      <form
         onSubmit={(event) => {
            event.preventDefault();
            submitCallback();
         }}
      >
         {adminDataSchema.map((e) => {
            return (
               <div className="inputes" key={e.column_name}>
                  <textarea
                     style={{ resize: "vertical" }}
                     required={true}
                     autoComplete="off"
                     rows={1}
                     id={e.column_name + "_inputID"}
                     // {...register("text", { required: "Geben Sie den Text" })}
                  ></textarea>
                  <label htmlFor={e.column_name + "_inputID"}>
                     {splitWordsSmart(e.column_name)}
                  </label>
                  {/* {errors.userName && (
                  <p className="text-red-500 text-sm pl-1">
                     {errors.userName.message}
                  </p>
               )} */}
               </div>
            );
         })}

         {/* 
         {errors.stars && (
            <p className="text-red-500 text-base font-bold pl-1">
               {errors.stars.message}!!!
            </p>
         )} 
         */}

         <CustomBtn
            type="submit"
            // disabled={isSubmitting}
            className="w-full mt-2"
            // btnText={
            //    isPending
            //       ? "Loading..."
            //       : isSubmitting
            //         ? "Wird gesendet..."
            //         : "Nachricht senden"
            // }
            onClick={() => setIsEditFormVisible(false)}
            btnText={"Cancel"}
         ></CustomBtn>
         <CustomBtn
            type="submit"
            // disabled={isSubmitting}
            className="w-full mt-2"
            // btnText={
            //    isPending
            //       ? "Loading..."
            //       : isSubmitting
            //         ? "Wird gesendet..."
            //         : "Nachricht senden"
            // }
            btnText={"Add"}
         ></CustomBtn>
      </form>
   );
};
