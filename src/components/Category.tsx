import Subforum, {SubforumProp} from "./Subforum.tsx";

export interface CategoryProps {
    id?: number,
    name: string,
    subforums?: SubforumProp[]
}

export default function Category({id, name, subforums}: CategoryProps) {
    return (
        <div className={""}>
            <div className={"rounded-t-lg px-2 grid grid-cols-3 gap-4 content-top bg-category-title-green text-neutral-100"}>
                <h1>{name}</h1>
                <h1 className={"text-center"}>Replies</h1>
                <h1 className={"text-center"}>Threads</h1>
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