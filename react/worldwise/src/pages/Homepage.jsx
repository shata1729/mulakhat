import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"

export default function Homepage() {
    return <div>
        <PageNav />
        <h1>WorldWise</h1>

        <Link to="/app">Go to the app</Link>
    </div>
}