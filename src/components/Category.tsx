import SubforumList from "./SubforumList.tsx";

export interface CategoryProps {
    id?: number,
    name: string,
    subforums?: never
}

export default function Category({id, name, subforums}: CategoryProps) {
    return (
        <div>
            <h1>{name}</h1>
            <SubforumList/>
        </div>
    )
}