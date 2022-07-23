/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalContext } from "@/context/global";
import React from "react";

export default function SetUser(props) {
    const { setUser } = useGlobalContext();

    React.useEffect(() => {
        setUser({
            firstName: "Juanito",
            lastName: "Pérez",
            role: "alumno", //  "alumno" | "maestro" | "padre" | "tutor"
            email: "juanito@gmail.com"
        });
    }, []);

    return props.children;
}
