import { Dispatch, SetStateAction, useState } from "react";

interface IImgState {
   isLoading: boolean;
   isError: boolean;
}

export interface IuseCustomImgData {
   imgState: IImgState;
   setImgState: Dispatch<SetStateAction<IImgState>>;
}

export const useCustomImg = (): IuseCustomImgData => {
   const [imgState, setImgState] = useState<IImgState>({
      isLoading: false,
      isError: false,
   });

   return { imgState, setImgState };
};
