import React from 'react';

export default function goToSection({ children, href, ...other }) {
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(href);


    return <a href={href} {...other}>{children}</a>;
}
