import Subforum, {SubforumProp} from "./Subforum.tsx";

export interface CategoryProps {
    id?: number,
    name: string,
    subforums?: SubforumProp[]
}

export default function Category({id, name, subforums}: CategoryProps) {
    return (
        <div>
            <div className={"rounded-t-lg px-2 py-2 flex content-top bg-moonstone"}>
                <h1 className={"flex-none w-1/2"}>{name}</h1>
                <h1 className={"flex-auto text-center"}>Replies</h1>
                <h1 className={"flex-auto text-center"}>Threads</h1>
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