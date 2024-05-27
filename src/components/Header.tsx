import {Link, Outlet} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className={"sticky bg-moonstone top-0  h-10"}>
                <h1 className={"px-4 py-2 font-bold"}>Forum</h1>
                <div className={"absolute top-2 right-0 flex divide-x divide-platinum"}>
                    <Link to={"/about"} className="px-2 hover:underline">About</Link>
                    <h1 className={"px-2"}>FAQ</h1>
                    <h1 className={"px-2 font-bold"}>Login</h1>
                </div>
            </header>
            <Outlet />
        </>

    )
}