import Index from "@/pages/Index";
import { Route, Routes } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: Index,
    key: "/",
  },
];

function RoutingList(): React.ReactElement {
  // const clientRoute = {
  //     path: routeData.dynamicPath,
  //     component: newpage,
  //     key: routeData.dynamicPath,
  // }

  // // Create an updated routes list by adding the dynamic route
  // const updatedRoutes = [...routes, clientRoute]
  return (
    <div>
      <Routes key={"1"}>
        {routes?.map((item) => {
          return (
            <Route path={item.path} Component={item.component} key={item.key} />
          );
        })}
      </Routes>
    </div>
  );
}

export default RoutingList;
