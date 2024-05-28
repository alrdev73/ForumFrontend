import {useEffect, useState} from "react";
import SubforumList from "./SubforumList.tsx";
import {SubforumListProp} from "./SubforumList.tsx"

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/Categories")
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
                    <SubforumList name={category.name} subforums={category.subforums}/>
            )}
        </div>
    )
}