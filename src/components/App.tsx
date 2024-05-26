import Header from "./Header.tsx"
import Body from "./Body.tsx"
import Footer from "./Footer.tsx"

function App() {
    return (
        <div className="flex flex-col bg-cadet-gray h-screen overflow-hidden">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App
