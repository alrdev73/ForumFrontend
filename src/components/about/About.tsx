import SubforumList from "../home/SubforumList.tsx";

export default function About() {
    return (
        <>
            <SubforumList name={"test"} subforums={[{name: "Hi", replies: 0, threads: 0}, {name: "Hello", replies: 1, threads: 1}]}></SubforumList>
        </>
    )
}