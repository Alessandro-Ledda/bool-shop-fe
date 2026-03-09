// import outlet
import { Outlet } from "react-router-dom";
// import MainHeader
import MainHeader from "../components/MainHeader";

function DefaultLayout() {
    return (
        <>
            <MainHeader />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout