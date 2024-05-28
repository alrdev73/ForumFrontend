import SubforumListItem, {SubforumListItemProp} from "./SubforumListItem.tsx";

export interface SubforumListProp {
    id?: number,
    name: string,
    subforums?: SubforumListItemProp[]
}

export default function SubforumList({id, name, subforums}: SubforumListProp) {
    return (
        <div className={"px-4 py-2.5"}>
            <div className={"relative rounded-t-lg py-2 flex bg-moonstone"}>
                <h1 className={"px-2 flex-none text-xl"}>{name}</h1>
                <div className={"px-2 absolute flex flex-none w-1/3 right-0"}>
                    <h1 className={"flex-none w-1/4 text-center"}>Replies</h1>
                    <h1 className={"flex-none w-1/4 text-center"}>Threads</h1>
                    <h1 className={"flex-none w-1/2 text-center"}>Last reply</h1>
                </div>
            </div>
            {
                subforums?.map((listItem: SubforumListItemProp) =>
                    <SubforumListItem id={listItem.id}
                                      name={listItem.name}
                                      description={listItem.description}
                                      replies={listItem.replies}
                                      threads={listItem.threads}/>
            )}
        </div>
    )
}