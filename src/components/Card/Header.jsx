import React from "react";
const Header = ({ title }) => {
    return (
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
        </div>
    );
}

export default Header;