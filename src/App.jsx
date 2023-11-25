import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    return (

        // BrowserRouter - using BrowserRouter we create Routes. And Route is how many individual pages we are creating is created using Route. So here we are creating two pages - Home and Result page. Route accept some props which are compulsory to add. 
        // 1st is path, as we are showing home page, we will add "/" . If we need a route to be default, then we use exact. element prop is used to accept a component and show.
        
        <AppContext>
            <BrowserRouter>                             
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/:query/:startIndex" element={<SearchResult/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext>
    )
}

export default App;
