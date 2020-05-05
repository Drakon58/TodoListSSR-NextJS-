import React from "react";
import Link from 'next/link';

export default (props) => {
    return (
        <li className="navbar-item">
            <Link href={props.To}><a className="nav-link" onClick={props.OnClick}>{props.LinkTitle}</a></Link>
        </li>
    );
}