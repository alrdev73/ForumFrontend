import {useEffect, useState} from "react";
import Category from "./Category.tsx";
import {CategoryProps} from "./Category.tsx"

export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch("https://localhost:44317/api/Categories")
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.error(err));
    }, [refresh]);

    return (
        <div className={"px-4 py-4 space-y-2"}>
            {categories.map((category : CategoryProps) =>
                <Category name={category.name} subforums={category.subforums}/>
            )}
        </div>
    )
}