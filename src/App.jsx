import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Helmet>
                <title>Poli-Learning</title>
            </Helmet>
        </>
    );
}

export default App;
