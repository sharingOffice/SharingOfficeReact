import AdminIndex from './admin/adminIndex';
import AdminLayout from './admin/adminLayout';
import AdminUsers from './admin/users/adminUsers';
import CoursesPage from './admin/courses/postsPage';
import HomeAbout from './home/homeAbout';
import HomeBlog from './home/homeBlog';
import HomeContact from './home/homeContact';
import HomeIndex from './home/homeIndex';
import HomeLayout from './home/home-layout';
import HomePrice from './home/homePrice';
import SignIn from './home/signIn';

import React from "react";
import {
    Route,
} from "react-router-dom";

const MyRoutes = [
  {
    path: "/admin",
    component: AdminLayout,
    routes: [
      {
          path: "/admin/index",
          component: AdminIndex,
          isDefault: true,
        },
        {
          path: "/admin/users",
          component: AdminUsers,
          isDefault: true,
        },
        {
          path: "/admin/courses",
          component: CoursesPage,
          isDefault: true,
        }
    ]
  },
  {
      path: "/",
      component: HomeLayout,
      routes: [
        {
            path: "/index",
            component: HomeIndex,
            isDefault: true,
          },
          {
            path: "/blog",
            component: HomeBlog,
            isDefault: true,
          },
          {
            path: "/contact",
            component: HomeContact,
            isDefault: true,
          }
          ,
          {
            path: "/about",
            component: HomeAbout,
            isDefault: true,
          }
          ,
          {
            path: "/price",
            component: HomePrice,
            isDefault: true,
          },
          {
            path: "/signin",
            component: SignIn,
            isDefault: true,
          }
      ]
    }
  ];

  const DoSth = (route) => {
    return (
        <div> {route.path} </div>
    );
  };

  const RouteWithSubRoutes = (route) => {
    return (
            <Route
            path={route.path}
            render={props => (

                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
          />
    );
  };
  

  export { MyRoutes, RouteWithSubRoutes, DoSth };

