export interface ThreadListItemProp {
    id?: number,
    name: string,
    description?: string,
    author: string,
    date: string,
    replies: number,
    views: number
}


export default function ThreadListItem({id, name, description, author, date, replies, views}: ThreadListItemProp) {
    return (
        <div className={"py-2 relative items-center odd:bg-neutral-300 even:bg-platinum last:shadow-md last:rounded-b-lg flex"}>
            <div className={"px-2 flex items-center"}>
                <img className={"w-1/12"} src={"/placeholder-subforum.jpg"} alt={"subforum image"}></img>
                <div className={"px-2 flex-none"}>
                    <h1>{name}</h1>
                    <h1 className={"font-light italic"}>{description}</h1>
                    <h1>Posted by {author} on {date}</h1>
                </div>
            </div>
            <div className={"px-2 absolute flex w-1/3 right-0 items-center"}>
                <h1 className={"w-1/4 flex-auto text-center"}>{replies}</h1>
                <h1 className={"w-1/4 flex-auto text-center"}>{views}</h1>
                <h1 className={"w-1/2 flex-none text-justify"}>Lorem ipsum dolor sit amet, consectetur...</h1>
            </div>
        </div>
    )
}