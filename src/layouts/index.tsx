// The component in this file live above the page components
// and persist across page changes. This behavior is controlled
// by 'gatsby-plugin-layout' in 'gatsby-config.js'.

import * as React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";

const Layout: React.FC = props => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <div>
      <Menu />
      <div>{props.children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;