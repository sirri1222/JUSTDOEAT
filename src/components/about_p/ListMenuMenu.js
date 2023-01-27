import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListMenuItem from "./ListMenuItem";
const ListMenuMenu = (props) => {
  return (
    <div>
      {" "}
      <ul>
        <ListMenuItem item={props.item} />
      </ul>
    </div>
  );
};

export default ListMenuMenu;
