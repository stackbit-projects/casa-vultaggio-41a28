import React from 'react';

export default function GoToSection({ children, href, ...other }) {
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(href);

    if (internal) {
        // For root page, use index.js, for rest use [...slug].js
        const page = href === '/' ? '/' : '/[...slug]';
        return (
        );
    }

    return <a href={href} {...other}>{children}</a>;
}
