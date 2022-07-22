import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Alumno1 from "../pages/Alumno1";

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />}>
                    <Route path="*" element={<Default />} />
                </Route>
                <Route path="alumno-1" element={<Alumno1 />} />1
            </Routes>
        </BrowserRouter>
    );
}

function Default() {
    return (
        <ul>
            <li>
                <Link to="/alumno-1">Go to Stundent 1 page</Link>
            </li>
        </ul>
    );
}
