import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import personalResume from '../local/resume.json'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomePage personalResume={personalResume} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes