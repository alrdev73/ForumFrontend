import {Link} from "react-router-dom";
import {BsPencil} from "react-icons/bs";

export interface SubforumListItemProp {
    subforumId: number,
    name: string,
    description?: string,
    replies: number,
    threads: number
}

export default function SubforumListItem({subforumId, name, description, replies, threads} : SubforumListItemProp) {
    return (
        <tr className={"flex px-2 py-2 items-center odd:bg-neutral-200 even:bg-neutral-100 last:rounded-b"}>
            <td className={"w-3/5 flex items-center"}>
                <img className={"max-w-12"} src={"/placeholder-subforum.jpg"} alt={"subforum image"}></img>
                <div className={"px-2"}>
                    <Link className={"hover:underline hover:text-sky-500"}
                          to={"viewforum/" + subforumId}>{name}</Link>
                    <h1 className={"font-light"}>{description}</h1>
                </div>
            </td>
            <div className={"w-2/5 flex"}>
                <td className={"w-1/6 flex justify-center items-center"}>
                    <BsPencil className={"text-xl text-neutral-500 hover:text-sky-400"}/>
                </td>
                <td className={"w-1/6 text-center"}>{replies}</td>
                <td className={"w-1/6 text-center"}>{threads}</td>
                <td className={"w-1/2 text-justify items-center line-clamp-1"}>Lorem ipsum dolor sit amet,
                    consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </td>
            </div>
        </tr>
    )
}