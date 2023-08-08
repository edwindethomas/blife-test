import NavRouter from "./components/NavRouter.jsx";
import Home from "./pages/Home.jsx";

function App() {

    return (
        <div className={'page__container'}>
            <NavRouter/>
            <Home />
        </div>
    )
}

export default App
