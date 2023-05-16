import React from "react";
import Header_Image from "../Images/header-img.jpg"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
               <div>
                    <h2 aria-level="1">Little Lemon</h2>
                    <h3 aria-level="2">Chicago</h3>
                    <p role="content info" >We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    <Link to="/Booking"><button aria-label="On Click" role="button">Reserve Table</button></Link>
                </div>
                <div>
                    <img src={Header_Image} />
                </div>
            </section>
        </header>
    )
}

export default Header;