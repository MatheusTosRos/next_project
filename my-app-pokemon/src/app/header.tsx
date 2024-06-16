import React from "react";

export default function Header(props: any) {
    return (
        <header id="header-pokemon">
            {props.title}
        </header>
    )
}