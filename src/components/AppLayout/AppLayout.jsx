import React from "react";
import "./AppLayout.scss";

const AppLayout = ({ children }) => (
  <div className="app-layout">
    <header className="app-layout__header">
      <h1 className="app-layout__title">AI: Your Smartest Business Partner</h1>
    </header>
    <main className="app-layout__main">{children}</main>
  </div>
);

export default AppLayout;
