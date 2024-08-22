import {useEffect, useState} from "react";
import SubforumList, {SubforumListProp} from "./SubforumList.tsx";
import {doGet} from "../../api.ts"

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
        <div>
            {categories.map((category : SubforumListProp) =>
                    <SubforumList name={category.name} categoryId={category.categoryId}/>
            )}
        </div>
    )
}