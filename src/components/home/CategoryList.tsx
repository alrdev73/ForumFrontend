import {useEffect, useState} from "react";
import SubforumList, {SubforumListProp} from "./SubforumList.tsx";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44317/api/Category")
            .then((res) => {
                console.log(res)
                return res.json()
            })
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