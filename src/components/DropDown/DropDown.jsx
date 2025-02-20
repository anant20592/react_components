import React, { useState } from 'react';
import Menu from '../Menu/Menu';

const DropDown = ({ options, searchable = false, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full">
            <div
                className="border border-gray-300 rounded-md p-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption || placeholder}
            </div>
            {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
                    {searchable && (
                        <input
                            type="text"
                            className="w-full p-2 border-b border-gray-300"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}
                    {/* <ul className="max-h-60 overflow-y-auto">
                        {filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul> */}
                    <Menu items={filteredOptions} />
                </div>
            )}
        </div>
    );
};

export default DropDown;