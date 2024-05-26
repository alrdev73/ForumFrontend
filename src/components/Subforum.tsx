export interface SubforumProp {
    id?: number,
    name: string,
    description?: string,
    replies: number,
    threads: number
}

export default function Subforum({id, name, description, replies, threads} : SubforumProp) {
    return (
        <div className={"items-center odd:bg-neutral-300 even:bg-platinum last:shadow-md last:rounded-b-lg flex"}>
            <div className={"flex w-1/2 items-center"}>
                <img className={"scale-75"} src={"/placeholder-subforum.jpg"} alt={"subforum image"}></img>
                <div className={"flex-none"}>
                    <h1>{name}</h1>
                    <h2 className={"font-light italic"}>{description}</h2>
                </div>
            </div>
            <h1 className={"flex-auto text-center"}>{replies}</h1>
            <h1 className={"flex-auto text-center"}>{threads}</h1>
        </div>
    )
}