import React from 'react';

const Rounded = ({ imageSrc, altText, children }) => {
    return (
        <div className="flex items-center justify-center">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={altText}
                    className="w-6 h-6 rounded-full object-cover"
                />
            ) : (
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Rounded;