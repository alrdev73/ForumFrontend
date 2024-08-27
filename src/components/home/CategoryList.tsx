import {useEffect, useState} from "react";
import SubforumList, {SubforumListProp} from "./SubforumList.tsx";
import {doGet} from "../../api.ts"
import AddSubforumButton from "./AddSubforumButton.tsx";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        doGet("https://localhost:443/api/Category")
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={"px-4 py-2.5 space-y-4"}>
            <AddSubforumButton/>
            {categories.map((category: SubforumListProp) =>
                <SubforumList name={category.name} categoryId={category.categoryId}/>
            )}
        </div>
    )
}