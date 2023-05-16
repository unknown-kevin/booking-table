import React from "react";

const ConfirmedBooking = () => {
    return(
        <header>
            <div role="heading" class="center">
                <h2 aria-label="Thank you for your Reservation">Thank you for your Reservation</h2>
            </div>
            <section  class="center">
                <p aria-describedby="thank-you-for-your-reservation">A confirmation has been sent to your email.</p>
            </section>
            <section class="center">
                <p aria-describedby="thank-you-for-your-reservation">We look forward to welcoming you into our restaurant soon.</p>
            </section>
        </header>
    )
}

export default ConfirmedBooking;