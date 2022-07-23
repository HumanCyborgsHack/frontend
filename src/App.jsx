import { Helmet } from "react-helmet";
import { Routing } from "@/routing/Routing";
import SetUser from "./auth/SetUser";
import Navbar from "@/components/Navbar";
import { GlobalContextProvider } from "./context/global";

function App() {
    return (
        <>
            <GlobalContextProvider>
                <Helmet>
                    <title>Poli-Learning</title>
                </Helmet>
                <SetUser>
                    <Routing />
                    <Navbar />
                </SetUser>
            </GlobalContextProvider>
        </>
    );
}

export default App;
