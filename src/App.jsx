import { Helmet } from "react-helmet";
import { Routing } from "@/routing/Routing";

import Navbar from "@/components/Navbar";

function App() {
    return (
        <>
            <Helmet>
                <title>Poli-Learning</title>
            </Helmet>
            <Routing />
            <Navbar />
        </>
    );
}

export default App;
