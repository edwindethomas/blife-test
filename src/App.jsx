import {Route, Routes} from "react-router-dom";
import NavRouter from "./components/NavRouter.jsx";
import Home from "./pages/Home.jsx";

function App() {

    return (
        <div className={'page__container'}>
            <NavRouter/>
            <Routes>
                <Route path='/' element={<Home />}/>
                {/*<Route path='/search' element={</>}/>*/}
            </Routes>
        </div>
    )
}

export default App
