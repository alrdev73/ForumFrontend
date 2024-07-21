import {Link, Outlet} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className={"relative bg-sky-200 top-0"}>
                <h1 className={"px-4 py-2 font-light text-2xl"}>DIY Forum</h1>
                <div className={"absolute top-3 right-2 items-center flex divide-x divide-platinum"}>
                    <Link to={"/about"} className="px-2 hover:underline">About</Link>
                    <h1 className={"px-2"}>FAQ</h1>
                    <h1 className={"px-2 font-bold"}>Login</h1>
                </div>
            </header>
            <Outlet />
        </>
    )
}