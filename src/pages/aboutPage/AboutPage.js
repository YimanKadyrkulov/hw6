import React from "react";
import { useDispatch } from "react-redux";
import Menu from "../../components/Menu";

function AboutPage() {

    const dispatch = useDispatch()

    const handleMenu = () => {
        dispatch({
            type: "HANDLE_MENU"
        })
    }

    return (
        <div>
            <button onClick={handleMenu}>Menu</button>
            <Menu />
        </div>
    )

}

export default AboutPage