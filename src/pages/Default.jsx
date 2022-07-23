import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export function Default() {
    return (
        <Layout>
            <ul>
                <li>
                    <Link to="/alumno-1">Go to Stundent 1 page</Link>
                </li>
            </ul>
        </Layout>
    );
}