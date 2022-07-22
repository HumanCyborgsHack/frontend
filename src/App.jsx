import { Helmet } from "react-helmet";
import { Routing } from "@/routing/Routing";
import "./App.css";

function App() {
    return (
        <>
            <Helmet>
                <title>Poli-Learning</title>
            </Helmet>
            <Routing />
        </>
    );
}

export default App;
