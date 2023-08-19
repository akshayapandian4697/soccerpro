import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddPlayer from "./AddPlayer"
import PlayerList from "./PlayerList";
function PageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addplayer' element={<AddPlayer />} />
            <Route path='/playerlist' element={<PlayerList />} />
        </Routes>
    )
}
export default PageRoutes;