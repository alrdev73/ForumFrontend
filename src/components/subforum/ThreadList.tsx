import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ThreadListItem, {ThreadListItemProp} from "./ThreadListItem.tsx";

export default function ThreadList() {
    const {forumId} = useParams();
    const [subforumName, setSubforumName] = useState("");
    const [threads, setThreads] = useState([]);
    
    useEffect(() => {
        fetch("https://localhost:44317/api/Subforum/Name/" + forumId)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                setSubforumName(data);
            })
            .catch((err) => console.error(err));

        fetch("https://localhost:44317/api/Thread/" + forumId)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                setThreads(data);
            })
            .catch((err) => console.error(err));
    }, [forumId]);
    
    return (
        <div className={"px-4 py-2.5"}>
            <div className={"relative rounded-t-lg px-2 py-2 flex bg-sky-200 place-items-center"}>
                <div className={"flex-col space-y-1"}>
                    <h1 className={"flex-none text-xl"}>{subforumName}</h1>
                    <button className={"px-2 flex-auto bg-sky-300 rounded-lg"}>+ Add thread</button>
                </div>
                <div className={"px-2 absolute flex w-1/3 right-0"}>
                    <h1 className={"flex-auto w-1/4 text-center"}>Replies</h1>
                    <h1 className={"flex-auto w-1/4 text-center"}>Views</h1>
                    <h1 className={"flex-auto w-1/2 text-center"}>Last reply</h1>
                </div>
            </div>
            {
                threads?.map((listItem: ThreadListItemProp) =>
                        <ThreadListItem forumThreadId={listItem.forumThreadId}
                                        name={listItem.name}
                                        author={listItem.author}
                                        date={listItem.date}
                                        replies={listItem.replies}
                                        views={listItem.views}/>
            )}
        </div>
    )
}