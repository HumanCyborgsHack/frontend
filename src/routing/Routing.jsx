import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Default } from "@/pages/Default";

import Alumno1 from "../pages/Alumno1";
import Clase from "../pages/Clase";
import Login from "../pages/Login";
import LoginLogin from "../pages/LoginLogin";
import Register from "../pages/Register";
import Alumno2 from "@/pages/Alumno2/Alumno2";
import { useGlobalContext } from "@/context/global";
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
                    </Route>
                )}
            </Routes>
        </BrowserRouter>
    );
}
