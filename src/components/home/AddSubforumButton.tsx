import {FaPlus} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Button} from "@headlessui/react";

export default function AddSubforumButton() {
    return (
        <Button className={"px-2 bg-green-100 rounded-md font-normal "}>
            <Link className={"flex place-items-center"}
                  to={"addsubforum"}>
                <span className={"px-1 font-normal"}>Add subforum</span>
                <FaPlus className={"text-gray-500"}/>
            </Link>
        </Button>
    )
}