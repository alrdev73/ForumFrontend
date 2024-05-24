export interface SubforumProp {
    id?: number,
    name: string,
    description?: string,
    replies: number,
    threads: number
}

export default function Subforum({id, name, description, replies, threads} : SubforumProp) {
    return (
        <div className={"px-4 odd:bg-category-odd-child-beige even:bg-neutral-100 last:shadow-md last:rounded-b-lg grid grid-cols-3 gap-4"}>
            <div>
                <h1>{name}</h1>
                <h2 className={"font-light"}>{description}</h2>
            </div>
            <h1 className={"text-center"}>{replies}</h1>
            <h1 className={"text-center"}>{threads}</h1>
        </div>
    )
}