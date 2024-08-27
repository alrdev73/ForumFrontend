import SubforumListItem, {SubforumListItemProp} from "./SubforumListItem.tsx";
import {useEffect, useState} from "react";
import {doGet} from "../../api.ts"
import AddSubforumButton from "./AddSubforumButton.tsx";

export interface SubforumListProp {
    categoryId: number;
    name: string;
}

export default function SubforumList(subforumListProp: SubforumListProp) {
    const [subforums, setSubforums] = useState([]);

    useEffect(() => {
        doGet("https://localhost:443/api/Subforum/" + subforumListProp.categoryId)
            .then((data) => {
                setSubforums(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <table className="rounded shadow table-fixed">
            <thead className={"rounded-t px-2 py-2 bg-sky-200"}>
                <tr className={"flex place-items-center"}>
                    <th className={"w-3/5 space-x-2 px-2 py-1 flex text-left"}>
                        <span className={"text-xl font-normal"}>{subforumListProp.name}</span>
                    </th>
                    <div className={"w-2/5 flex"}>
                        <th className={"w-1/6 font-normal"}>Action</th>
                        <th className={"w-1/6 font-normal"}>Replies</th>
                        <th className={"w-1/6 font-normal"}>Threads</th>
                        <th className={"w-1/2 font-normal"}>Last reply</th>
                    </div>
                </tr>
            </thead>
            <tbody>
            {
                subforums?.map((listItem: SubforumListItemProp) =>
                        <SubforumListItem subforumId={listItem.subforumId}
                                          name={listItem.name}
                                          description={listItem.description}
                                          replies={listItem.replies}
                                          threads={listItem.threads}/>
                    )
                }
            </tbody>
        </table>
    )
}