import { Download } from "lucide-react";
import { SimpleError } from "../../../Components/Errors/SimpleError";
import { useGetAllItems } from "../../../Hooks/Query/Items/useGetAll";
import { screenList } from "../../../Routing/RoutingList";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { SimpleItemsList } from "../../../Components/ItemsList/SimpleItemsList";

interface IListRenderingProps {
   selectedType: string;
   searchText: string;
}

export const ListRendering = ({
   selectedType,
   searchText,
}: IListRenderingProps): JSX.Element => {
   const {
      isLoading,
      error,
      list: catalogList,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage,
   } = useGetAllItems(selectedType, searchText);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (error || !catalogList) {
      return (
         <SimpleError
            title="Problemen on Server"
            btnText="Nach Hause"
            navigateTo={screenList.home.path}
         />
      );
   }

   if (!catalogList.length) {
      return (
         <SimpleError
            title="Keine Einträge gefunden"
            btnText="Nach Hause"
            navigateTo={screenList.home.path}
         />
      );
   }

   return (
      <>
         <SimpleItemsList itemsList={catalogList} />

         {hasNextPage && (
            <div className="w-full flex justify-center mt-4">
               <CustomBtn
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  btnText={
                     <div className="flex justify-center items-center text-inherit gap-2">
                        {isFetchingNextPage
                           ? "Loading..."
                           : "Daten herunterladen"}
                        <Download color="white" size={20} />
                     </div>
                  }
                  className="px-3"
               />
            </div>
         )}
         {isLoading && <p>Loading...</p>}
      </>
   );
};
