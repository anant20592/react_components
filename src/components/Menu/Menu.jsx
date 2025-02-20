import React from 'react';

const Menu = ({...props}) => {
    return (
        <div className="bg-white shadow-md rounded-lg w-64">
            <ul className="divide-y divide-gray-200">
                {props.children}
            </ul>
        </div>
    );
};

export default Menu;