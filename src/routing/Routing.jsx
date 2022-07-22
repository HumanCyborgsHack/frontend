import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />}>
                    <Route path="*" element={<Default />} />
                </Route>
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
