import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Default } from "@/pages/Default";

import Alumno1 from "../pages/Alumno1";
import Alumno2 from "@/pages/Alumno2/Alumno2";
import { useGlobalContext } from "@/context/global";

export function Routing() {
    const { user } = useGlobalContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />}>
                    <Route path="*" element={<Default />} />
                </Route>
                {user.role === "alumno" && (
                    <>
                        <Route path="alumno-1" element={<Alumno1 />} />
                        <Route path="alumno-2" element={<Alumno2></Alumno2>} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}
