// import outlet
import { Outlet } from "react-router-dom";
// import MainHeader
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

function DefaultLayout() {
    return (
        <>
            <MainHeader />
            <main>
                <Outlet />
            </main>
            <MainFooter />
        </>
    )
}

export default DefaultLayout