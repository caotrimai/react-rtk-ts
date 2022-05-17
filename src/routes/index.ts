//Pages
import Home from '~/features/counter/page'
import * as React from "react";

interface PageRoute {
  path: string;
  component: React.ComponentType<any>;
  layout?: React.ComponentType<any> | null;
}

const publicRoutes: Array<PageRoute> = [
  {path: '/', component: Home},
];

const privateRoutes: Array<PageRoute>  = [];

export {publicRoutes, privateRoutes}