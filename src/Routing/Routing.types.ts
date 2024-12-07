type RouteKeys = "home" | "contact" | "about" | "catalog" | "contationService";

export interface IRoutingList {
   path: string;
   component: JSX.Element;
   name: string;
}

export type IScreenList = Record<RouteKeys, IRoutingList>;
