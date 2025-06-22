export interface IErrorMessage {
   message: string;
}

export function logError(data: any) {
   if ("message" in data) {
      throw new Error(data.message);
   } else {
      throw new Error("Unknown error");
   }
}
