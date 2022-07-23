import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Default } from "@/pages/Default";

import Alumno1 from "../pages/Alumno1";
import Maestro1 from "../pages/Maestro1";
import Clase from "../pages/Clase";
import Login from "../pages/Login";
import LoginLogin from "../pages/LoginLogin";
import Register from "../pages/Register";
import Alumno2 from "@/pages/Alumno2/Alumno2";
import Institucion from "@/pages/Institucion";
import { useGlobalContext } from "@/context/global";
import ClasesPorTema from "@/pages/ClasesPorTema";
import VideoClase from "../pages/VideoClase";

export function Routing() {
    const { user } = useGlobalContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />}>
                    <Route path="*" element={<Default />} />
                </Route>
                <Route path="/register/register" element={<Register />} />
                <Route path="/register/login" element={<LoginLogin />} />
                <Route path="/register" element={<Login />} />
                <Route path="/institucion" element={<Institucion />} />

                {user.role === "alumno" && (
                    <Route path="alumno-1">
                        <Route index element={<Alumno1 />} />

                        <Route path="matematicas">
                            <Route index element={<Clase />} />
                            <Route
                                path="lineas-rectas"
                                element={<VideoClase />}
                            />
                        </Route>

                        <Route path="materia" element={<Alumno2 />} />
                        <Route path="matematicas" element={<Clase />} />
                        <Route path="clases" element={<ClasesPorTema />} />
                    </Route>
                )}
                <Route path="alumno-2">
                    <Route index element={<Alumno2 />} />
                </Route>
                <Route path="maestro-1">
                    <Route index element={<Maestro1 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
