import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-b border-neutral-900 pb-6 lg:pb-10 px-4 pt-14 text-center">
            <p>Copyright © {currentYear} Sharvien Paul Claro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
