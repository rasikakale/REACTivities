import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {

        //returns true if command on mac or ctrl on windows was clicked to open a new tab
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        //prevents normal behavior of the browser, which in this case is preventing a full page reload
        event.preventDefault();

        // keeps content on screen in sync with link
        window.history.pushState({}, '', href);

        // will communicate to Route component that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href}>{children}

    </a>;
};

export default Link;