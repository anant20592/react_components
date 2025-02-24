import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Card = ({ children, onClick }) => {
    const handleClick = () => {
        console.log("Card Clicked");
        onClick?.()
    }
    return (
        <div className="rounded overflow-hidden shadow-lg p-4 bg-white" onClick={handleClick}>
           {children}
        </div>
    );
};

Card.Content = Content;
Card.Header = Header;
Card.Footer = Footer;

export default Card;