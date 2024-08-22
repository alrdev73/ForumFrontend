import React from "react";
import {useCollapse} from "react-collapsed";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

interface ButtonProps {
    title: string,
    children: React.ReactNode
}

export default function CollapsibleButton(props: ButtonProps) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className={"px-2 py-0.5 bg-sky-300"}>
            <div {...getToggleProps()} className={"flex flex-row place-items-center space-x-2"}>
                <div>{props.title}</div>
                <div>{isExpanded ? <FaChevronUp/> : <FaChevronDown/>}</div>
            </div>
            <div {...getCollapseProps()}>
                <div>{props.children}</div>
            </div>
        </div>
    )
}