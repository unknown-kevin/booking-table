import React from "react";
import main_logo from "../Images/logo-main.png"

const Nav = () => {
    return(
        <nav>
            <section>
                <img src={main_logo} alt="Little Lemon Logo" role="presentation"></img>
            </section>
            <section>
                <ul role="list">
                    <li role="list item"><a>Home</a></li>
                    <li role="list item"><a>About</a></li>
                    <li role="list item"><a>Menu</a></li>
                    <li role="list item"><a>Reservations</a></li>
                    <li role="list item"><a>Order Online</a></li>
                    <li role="list item"><a>Login</a></li>
                </ul>
            </section>
        </nav>
    )
}

export default Nav;