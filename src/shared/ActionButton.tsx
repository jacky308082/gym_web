import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import * as child_process from "child_process";
import {SelectedPage} from "./type";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-100 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton