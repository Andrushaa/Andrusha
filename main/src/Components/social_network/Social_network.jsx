import React, { useState } from 'react';
import './social_network.css';

function SocialNetwork() {
    let [name, setName] = useState("Социальные сети");
    const network = "Социальные сети";

    const social = [{
            id: 1,
            text: 'VKontakte',
            link: 'https://vk.com/',
            class: 'fab fa-vk'
        }, {
            id: 2,
            text: 'Telegram',
            link: 'https://telegram.org/',
            class: 'fab fa-telegram'
        }, {
            id: 3,
            text: 'Discord',
            link: 'https://discord.com/',
            class: 'fab fa-discord'
        }, {
            id: 4,
            text: 'WhatsApp',
            link: 'https://web.whatsapp.com/',
            class: 'fab fa-whatsapp'
        }, {
            id: 5,
            text: 'Viber',
            link: 'https://www.viber.com/ru/',
            class: 'fab fa-viber'
        }
    ]

    return (
        <>
            <div className="social-network">
                {social.map(social => (
                    <button onMouseOver={() => setName(social.text)} onMouseOut={() => setName(name = network)} key={social.id}>
                        <a href={social.link} target="_blank"  rel="noreferrer">
                            <i className={social.class}> </i>
                        </a>
                    </button>
                    )
                )}
            </div>

            <div className="social-network__title">
                <i className="fas fa-arrow-up"> </i>
                &nbsp; {name} &nbsp;
                <i className="fas fa-arrow-up"> </i>
            </div>
        </>

    );
}

export default SocialNetwork;