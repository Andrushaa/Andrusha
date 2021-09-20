import React, { useState } from 'react';
import './social_network.css';

function SocialNetwork() {
    let [count, setCount] = useState("Социальные сети");

    return (
        <>
            <div className="social-network">
                <button onMouseOver={() => setCount(count = "VKontakte")} onMouseOut={() => setCount(count ="Социальные сети")}><a href="https://vk.com/" target="_blank"  rel="noreferrer"><i className="fab fa-vk"> </i></a></button>
                <button onMouseOver={() => setCount(count = "Telegram")} onMouseOut={() => setCount(count ="Социальные сети")}><a href="https://telegram.org/" target="_blank"  rel="noreferrer"><i className="fab fa-telegram"> </i></a></button>
                <button onMouseOver={() => setCount(count = "Discord")} onMouseOut={() => setCount(count ="Социальные сети")}><a href="https://discord.com/" target="_blank"  rel="noreferrer"><i className="fab fa-discord"> </i></a></button>
                <button onMouseOver={() => setCount(count = "WhatsApp")} onMouseOut={() => setCount(count ="Социальные сети")}><a href="https://web.whatsapp.com/" target="_blank"  rel="noreferrer"><i className="fab fa-whatsapp"> </i></a></button>
                <button onMouseOver={() => setCount(count = "Viber")} onMouseOut={() => setCount(count ="Социальные сети")}><a href="https://www.viber.com/ru/" target="_blank"  rel="noreferrer"><i className="fab fa-viber"> </i></a></button>
            </div>

            <div className="social-network__title">
                <i className="fas fa-arrow-up"> </i>
                &nbsp; {count} &nbsp;
                <i className="fas fa-arrow-up"> </i>
            </div>
        </>

    );
}

export default SocialNetwork;