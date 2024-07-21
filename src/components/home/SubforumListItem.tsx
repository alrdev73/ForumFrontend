import {Link} from "react-router-dom";

export interface SubforumListItemProp {
    subforumId: number,
    name: string,
    description?: string,
    replies: number,
    threads: number
}

export default function SubforumListItem({subforumId, name, description, replies, threads} : SubforumListItemProp) {
    function handleEditClick() {
        // return (
        //
        // )
    }

    function EditMenu() {
        return (
            <>
                
            </>
        )
    }

    return (
        <div className={"py-2 relative items-center odd:bg-neutral-200 even:bg-neutral-100 last:shadow-md last:rounded-b-lg flex"}>
            <div className={"px-2 flex items-center"}>
                <img className={"max-w-12"} src={"/placeholder-subforum.jpg"} alt={"subforum image"}></img>
                <div className={"px-2"}>
                    <Link className={"hover:underline hover:text-sky-500"} to={"viewforum/" + subforumId}>{name}</Link>
                    <h1 className={"font-light"}>{description}</h1>
                    <button onClick={<EditMenu>} className={"px-2 flex-auto bg-sky-300 rounded-lg"}>Edit</button>
                </div>
            </div>
            <div className={"px-2 absolute flex w-1/3 right-0 items-center"}>
                <h1 className={"w-1/4 flex-auto text-center"}>{replies}</h1>
                <h1 className={"w-1/4 flex-auto text-center"}>{threads}</h1>
                <h1 className={"w-1/2 flex-none text-justify truncate"}>Lorem ipsum dolor sit amet, consectetur...</h1>
            </div>
        </div>
    )
}