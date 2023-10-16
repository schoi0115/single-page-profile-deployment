import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function PageLink() {


    return (
        <div className="link">
            <ul className="link-menu">
                <li>
                    <Link to='#home'>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to='#page1'>
                        Personality
                    </Link>
                </li>
                <li>
                    <Link to='#page2'>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to='#page3'>
                        Applications
                    </Link>
                </li>
                <li className="nav-width">
                    <Link to='#page4'>
                        Cover Letter
                    </Link>
                </li>
            </ul>
        </div>

    );

}

export default PageLink;
