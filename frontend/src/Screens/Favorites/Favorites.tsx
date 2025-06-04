import { useFavoritesStore } from "../../Store/FavoritesStore";
import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { screenList } from "../../Routing/RoutingList";
import {
   StandartDialog,
   useStandartDialog,
} from "../../UI/CustomDialog/Standart/StandartDialog";
import { useGetSomeItems } from "../../Hooks/Query/Items/useGetSome";
import { SimpleItemsList } from "../../Components/ItemsList/SimpleItemsList";
import { LoadingBlock } from "../../Components/LoadingBlock/LoadingBlock";

export const Favorites = (): JSX.Element => {
   const favoritesListIDs = useFavoritesStore((state) => state.favoritesList);
   const clearFavoritesList = useFavoritesStore(
      (state) => state.clearFavoritesList
   );

   const { modalData, setModalData } = useStandartDialog();

   const {
      isLoading,
      error,
      list: localFavoritesList,
   } = useGetSomeItems(favoritesListIDs);

   if (isLoading) {
      return <LoadingBlock />;
   }

   if (error) {
      return (
         <SimpleError
            title="Problemen on Server"
            btnText="Nach Hause"
            navigateTo={screenList.home.path}
         />
      );
   }

   if (!localFavoritesList || !localFavoritesList?.length) {
      return (
         <SimpleError
            title="Sie haben keine Favorittprodukt"
            btnText="Etwas finden"
            navigateTo={screenList.catalog.path}
         />
      );
   }

   return (
      <>
         <SectionWithHeadline title={"Favoriten"} className="m-0">
            <SimpleItemsList itemsList={localFavoritesList} />

            <CustomBtn
               onClick={() =>
                  setModalData({
                     isOpen: true,
                     content: "Elemente aus der Favoritenliste entfernen?",
                     onOkeyClick: clearFavoritesList,
                  })
               }
               bgColor="primaryPink"
               className="text-base mt-6 w-full ml-auto"
               btnText={"Favoritenliste löschen"}
            />
         </SectionWithHeadline>

         <StandartDialog modalData={modalData} setModalData={setModalData} />
      </>
   );
};
