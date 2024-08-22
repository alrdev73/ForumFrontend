import SubforumListItem, {SubforumListItemProp} from "./SubforumListItem.tsx";
import {useEffect, useState} from "react";
import {doGet} from "../../api.ts"
import CollapsibleButton from "../CollapsibleButton.tsx";

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
            // {/*<div className={"px-4 py-2.5"}>*/}
            // {/*    <div className="shadow rounded">*/}
            // {/*        <div className={"relative rounded-t px-2 py-2 flex bg-sky-200 place-items-center"}>*/}
            // {/*            <div className={"flex-col space-y-1"}>*/}
            // {/*                <h1 className={"flex-auto text-xl"}>{subforumListProp.name}</h1>*/}
            // {/*            </div>*/}
            // {/*            <div className={"px-2 absolute flex w-1/3 right-0"}>*/}
            // {/*                <h1 className={"flex-auto w-1/4 text-center"}>Replies</h1>*/}
            // {/*                <h1 className={"flex-auto w-1/4 text-center"}>Threads</h1>*/}
            // {/*                <h1 className={"flex-auto w-1/2 text-center"}>Last reply</h1>*/}
            // {/*            </div>*/}
            // {/*        </div>*/}
            // {/*        <CollapsibleButton title={"Add subforum"}>*/}
            // {/*            <form className={"flex flex-row space-x-4 place-items-end"}>*/}
            // {/*                <div className={"flex flex-col"}>*/}
            // {/*                    <label className={"font-bold"}>Name: </label>*/}
            // {/*                    <input name={"name"} id={"name"} className={"rounded"}/>*/}
            // {/*                </div>*/}
            // {/*                <div className={"flex flex-col"}>*/}
            // {/*                    <label className={"font-bold"}>Description: </label>*/}
            // {/*                    <input name={"description"} id={"description"} className={"rounded"}/>*/}
            // {/*                </div>*/}
            // {/*                <div>*/}
            // {/*                    <button className={"bg-green-100 rounded px-0.5 py-0.5"}>Submit</button>*/}
            // {/*                </div>*/}
            // {/*            </form>*/}
            // {/*        </CollapsibleButton>*/}
            // {/*        {*/}
            // {/*            subforums?.map((listItem: SubforumListItemProp) =>*/}
            // {/*                <SubforumListItem subforumId={listItem.subforumId}*/}
            // {/*                                  name={listItem.name}*/}
            // {/*                                  description={listItem.description}*/}
            // {/*                                  replies={listItem.replies}*/}
            // {/*                                  threads={listItem.threads}/>*/}
            // {/*            )}*/}
            // {/*    </div>*/}
            // {/*</div>*/}
            // {/*OLD*/}


    return (
            <div className={"px-4 py-2.5"}>
                <table className="shadow rounded table-fixed min-w-full">
                    <thead className={"rounded-t px-2 py-2 bg-sky-200 place-items-center"}>
                    <tr>
                        <th className={"text-xl font-light"}>{subforumListProp.name}</th>
                        <th>Replies</th>
                        <th>Threads</th>
                        <th>Last reply</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <CollapsibleButton title={"Add subforum"}>
                            <form className={"flex flex-row space-x-4 place-items-end"}>
                                <div className={"flex flex-col"}>
                                    <label className={"font-bold"}>Name: </label>
                                    <input name={"name"} id={"name"} className={"rounded"}/>
                                </div>
                                <div className={"flex flex-col"}>
                                <label className={"font-bold"}>Description: </label>
                                    <input name={"description"} id={"description"} className={"rounded"}/>
                                </div>
                                <div>
                                    <button className={"bg-green-100 rounded px-0.5 py-0.5"}>Submit</button>
                                </div>
                            </form>
                    </CollapsibleButton>
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
            </div>
    )
}