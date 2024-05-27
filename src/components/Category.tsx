import Subforum, {SubforumProp} from "./Subforum.tsx";

export interface CategoryProps {
    id?: number,
    name: string,
    subforums?: SubforumProp[]
}

export default function Category({id, name, subforums}: CategoryProps) {
    return (
        <div>
            <div className={"relative rounded-t-lg py-2 flex bg-moonstone"}>
                <h1 className={"px-2 flex-none text-xl"}>{name}</h1>
                <div className={"px-2 absolute flex flex-none w-1/3 right-0"}>
                    <h1 className={"flex-none w-1/4 text-center"}>Replies</h1>
                    <h1 className={"flex-none w-1/4 text-center"}>Threads</h1>
                    <h1 className={"flex-none w-1/2 text-center"}>Last reply</h1>
                </div>
            </div>
            <div>
                {subforums?.map((subforum: SubforumProp) =>
                <Subforum name={subforum.name} description={subforum.description} replies={subforum.replies}
                          threads={subforum.threads}/>
            )}
            </div>
        </div>
    )
}