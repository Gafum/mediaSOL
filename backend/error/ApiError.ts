export interface IApiError {
   status: number;
   message: string;
}

export class ApiError extends Error {
   static notFound(arg0: string): any {
      throw new Error("Method not implemented.");
   }
   status = 500;

   constructor(status: number, message: string) {
      super();
      this.status = status;
      this.message = message;
   }

   static forbidden(message: string) {
      return new ApiError(403, message);
   }

   static tooManyRequests(message?: string) {
      return new ApiError(429, message ?? "Too many requests, try again later");
   }

   static badRequest(message: string) {
      return new ApiError(404, message);
   }

   static internal(message: string) {
      return new ApiError(500, message);
   }
}
