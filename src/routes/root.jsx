import { Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <p>
                    Menu: 
                    <a href={`/`}>Home</a> &mdash;
                    <Link to={`/app`}>App</Link> &mdash;
                    <Link to={`/clock`}>Clock</Link> &mdash;
                    <Link to={`/fetcher`}>API</Link> &mdash;
                    <Link to={`/names`}>Names</Link>
                    <Link to={`/equalizer`}>Equalizer Band</Link>
                </p>
            </nav>
        </>
    )
}