export interface IApiError {
   status: number;
   message: string;
}

export class ApiError extends Error {
   status = 500;

   constructor(status: number, message: string) {
      super();
      this.status = status;
      this.message = message;
   }

   static badRequest(message: string) {
      return new ApiError(404, message);
   }

   static internal(message: string) {
      return new ApiError(500, message);
   }

   static forbidden(message: string) {
      return new ApiError(403, message);
   }
}
