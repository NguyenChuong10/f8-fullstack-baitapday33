import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
function DefaultLayout () {
    return(
        <div className="">
            <Header/>
            <main>
                <Outlet/>
            </main>
           <Footer/>
        </div>
    );
}

export default DefaultLayout;