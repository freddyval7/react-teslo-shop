import { RouterProvider } from "react-router";
import { appRouter } from "./app.routes";

export const TesloShopApp = () => {
  return <RouterProvider router={appRouter} />;
};
