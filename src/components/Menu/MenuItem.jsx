import React from "react";

const MenuItem = (props) => {
  return (
    <li className="p-4 hover:bg-gray-100 cursor-pointer">
        {props.children}
    </li>
  );
}

export default MenuItem;