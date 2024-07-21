import {useParams} from "react-router-dom";

export default function ThreadPage() {
    const {threadId} = useParams();
    return (
        <>
            <h1>ThreadPage</h1>
        </>
    )
}