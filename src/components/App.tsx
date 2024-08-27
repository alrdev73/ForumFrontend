import Header from "./Header.tsx"
import Home from "./home/Home.tsx"
import Footer from "./Footer.tsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./no-page/NoPage.tsx";
import About from "./about/About.tsx";
import ThreadList from "./subforum/ThreadList.tsx";
import ThreadPage from "./thread/ThreadPage.tsx";
import AddSubforum from "./add-subforum/AddSubforum.tsx";

function App() {
    return (
        <div className="flex flex-col bg-neutral-50">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"}>
                        <Route index element={<Home />}/>
                        <Route path={"about"} element={<About />}/>
                        <Route path={"*"} element={<NoPage />}/>
                        <Route path={"viewforum/:forumId"} element={<ThreadList />}/>
                        <Route path={"viewthread/:threadId"} element={<ThreadPage />}/>
                        <Route path={"addsubforum"} element={<AddSubforum/>}/>
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
