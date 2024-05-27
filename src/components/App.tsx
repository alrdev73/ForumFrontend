import Header from "./Header.tsx"
import Home from "./Home.tsx"
import Footer from "./Footer.tsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./NoPage.tsx";
import About from "./About.tsx";

function App() {
    return (
        <div className="flex flex-col bg-cadet-gray h-screen overflow-hidden">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"}>
                        <Route index element={<Home />}></Route>
                        <Route path={"about"} element={<About />}></Route>
                        <Route path={"*"} element={<NoPage />}></Route>
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
