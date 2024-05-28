import Header from "./Header.tsx"
import Home from "./home/Home.tsx"
import Footer from "./Footer.tsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./no-page/NoPage.tsx";
import About from "./about/About.tsx";
import ThreadList from "./subforum/ThreadList.tsx";

function App() {
    return (
        <div className="flex flex-col bg-cadet-gray h-screen overflow-hidden">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"}>
                        <Route index element={<Home />}/>
                        <Route path={"about"} element={<About />}/>
                        <Route path={"*"} element={<NoPage />}/>
                        <Route path={"viewforum/:forumId"} element={<ThreadList/>}/>
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
