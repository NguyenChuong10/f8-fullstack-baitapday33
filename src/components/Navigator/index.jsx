import { NavLink } from "react-router";

import paths from "../../config/Paths.js";

import "../Navigator/index.css"

const listNav = [
    {
        path: paths.home,
        title: "Home"
    },

    {
        path: paths.news,
        title: "News"
    },

    {
        path: paths.about,
        title: "About"
    }
];

function Navigator() {
    const renderItems = () => {
        return listNav.map((item, index) => (
            <li  key={index}>
                <NavLink className="!text-white bg-[#32f696] p-8 rounded-[12px] " to={item.path}>{item.title}</NavLink>
            </li>
        ));
    }
    console.log(renderItems());
    return (
        <ul className="flex gap-30 items-center ">
            {renderItems()}
        </ul>
    );
}

export default Navigator;