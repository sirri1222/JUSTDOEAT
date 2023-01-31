import React from "react";

const Layout = (props) => {
  return (
    <div className="max-w-6xl mx-auto ">
      {/* 내용 */}
      {props.children}
    </div>
  );
};

export default Layout;
