import {Link} from "react-router-dom";
import {FaRegTrashAlt} from "react-icons/fa";
import {BsPencil} from "react-icons/bs";

export interface SubforumListItemProp {
    subforumId: number,
    name: string,
    description?: string,
    replies: number,
    threads: number
}

export default function SubforumListItem({subforumId, name, description, replies, threads} : SubforumListItemProp) {
    // {/*OLD*/}
    //         {/*<div className={"py-2 relative items-center odd:bg-neutral-200 even:bg-neutral-100 last:rounded-b flex"}>*/}
    //         {/*    <div className={"px-2 flex items-center"}>*/}
    //         {/*        <img className={"max-w-12"} src={"/placeholder-subforum.jpg"} alt={"subforum image"}></img>*/}
    //         {/*        <div className={"px-2"}>*/}
    //         {/*            <Link className={"hover:underline hover:text-sky-500"}*/}
    //         {/*                  to={"viewforum/" + subforumId}>{name}</Link>*/}
    //         {/*            <h1 className={"font-light"}>{description}</h1>*/}
    //         {/*        </div>*/}
    //         {/*    </div>*/}
    //         {/*    <div className={"flex flex-auto space-x-3"}>*/}
    //         {/*        <BsPencil className={"text-xl text-neutral-500 hover:text-sky-400"}/>*/}
    //         {/*        <FaRegTrashAlt className={"text-xl text-neutral-500 hover:text-red-700"}/>*/}
    //         {/*    </div>*/}
    //         {/*    <div className={"px-2 absolute flex flex-auto w-1/3 right-0 items-center"}>*/}
    //         {/*        <h1 className={"w-1/4 text-center"}>{replies}</h1>*/}
    //         {/*        <h1 className={"w-1/4 text-center"}>{threads}</h1>*/}
    //         {/*        <h1 className={"w-1/2 text-justify truncate"}>Lorem ipsum dolor sit amet, consectetur...</h1>*/}
    //         {/*    </div>*/}
    //
    //         {/*</div>*/}
    //         {/*OLD*/}
    return (
        <tr className={"py-2 items-center odd:bg-neutral-200 even:bg-neutral-100 last:rounded-b"}>
            <td className={"px-2 flex items-center"}>
                <img className={"max-w-12"} src={"/placeholder-subforum.jpg"} alt={"subforum image"}></img>
                <div className={"px-2"}>
                    <Link className={"hover:underline hover:text-sky-500"}
                          to={"viewforum/" + subforumId}>{name}</Link>
                    <h1 className={"font-light"}>{description}</h1>
                </div>
            </td>
            <td className={"text-center"}>{replies}</td>
            <td className={"text-center"}>{threads}</td>
            <td className={"text-justify truncate"}>Lorem ipsum dolor sit amet, consectetur...</td>
            <td><BsPencil className={"text-xl text-neutral-500 hover:text-sky-400"}/></td>
            <td><FaRegTrashAlt className={"text-xl text-neutral-500 hover:text-red-700"}/></td>
        </tr>
    )
}