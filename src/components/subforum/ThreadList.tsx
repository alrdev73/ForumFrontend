import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ThreadListItem, {ThreadListItemProp} from "./ThreadListItem.tsx";

export default function ThreadList() {
    const {forumId} = useParams();
    const [threads, setThreads] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/api/Threads/" + forumId)
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
            <div className={"relative rounded-t-lg py-2 flex bg-moonstone"}>
                <h1 className={"px-2 flex-none text-xl"}>TODO get subforum name from backend?</h1>
                <div className={"px-2 absolute flex flex-none w-1/3 right-0"}>
                    <h1 className={"flex-none w-1/4 text-center"}>Replies</h1>
                    <h1 className={"flex-none w-1/4 text-center"}>Threads</h1>
                    <h1 className={"flex-none w-1/2 text-center"}>Last reply</h1>
                </div>
            </div>
            {
                threads?.map((listItem: ThreadListItemProp) =>
                        <ThreadListItem id={listItem.id}
                                        name={listItem.name}
                                        author={listItem.author}
                                        date={listItem.date}
                                        replies={listItem.replies}
                                        views={listItem.views}/>
                )}
        </div>
    )
}