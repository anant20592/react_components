import React from 'react';

const Layout = ({ title, children }) => {
    return (
        <div className="bg-gray-100 min-h-full p-2">
            <div className='title mb-4'>{title}</div>
            <div>
                {children}
            </div>
            
        </div>
    );
};

export default Layout;