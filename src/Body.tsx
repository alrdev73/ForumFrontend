import Subforum from "./Subforum.tsx";

export default function Body() {
    return (
        <div className={"px-4 py-1 bg-neutral-200 mx-auto flex flex-col space-y-1.5"}>
                <div className={"px-2 py-0.5 bg-teal-200 flex flex-col space-y-1 rounded"}>
                    <h1>Welcome</h1>
                    <Subforum/>
                    <Subforum/>
                </div>
                <div className={"px-2 py-0.5 bg-teal-200 flex flex-col space-y-1 rounded"}>
                    <h1>Subforums</h1>
                    <Subforum/>
                    <Subforum/>
                    <Subforum/>
                </div>
        </div>
    )
}