import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Default } from "@/pages/Default";

import Alumno1 from "../pages/Alumno1";
import Clase from "../pages/Clase";
import Login from "../pages/Login";
import Alumno2 from "@/pages/Alumno2/Alumno2";
import { useGlobalContext } from "@/context/global";
import ClasesPorTema from "@/pages/ClasesPorTema";

export function Routing() {
    const { user } = useGlobalContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />}>
                    <Route path="*" element={<Default />} />
                </Route>
                <Route path="/register" element={<Login />} />

                {user.role === "alumno" && (
                    <Route path="alumno-1">
                        <Route index element={<Alumno1 />} />
                        <Route path="materia" element={<Alumno2 />} />
                        <Route path="matematicas" element={<Clase />} />
                        <Route path="clases" element={<ClasesPorTema />} />
                    </Route>
                )}
            </Routes>
        </BrowserRouter>
    );
}
