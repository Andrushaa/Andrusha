import React, {Component} from 'react';
import './social_network.css';

class SocialNetwork extends Component {
    render() {
        return (
            <div>
                <ul className="social-network">
                    <li><a href="https://vk.com/" target="_blank"  rel="noreferrer"><i className="fab fa-vk"> </i></a></li>
                    <li><a href="https://telegram.org/" target="_blank"  rel="noreferrer"><i className="fab fa-telegram"> </i></a></li>
                    <li><a href="https://discord.com/" target="_blank"  rel="noreferrer"><i className="fab fa-discord"> </i></a></li>
                    <li><a href="https://web.whatsapp.com/" target="_blank"  rel="noreferrer"><i className="fab fa-whatsapp"> </i></a></li>
                    <li><a href="https://www.viber.com/ru/" target="_blank"  rel="noreferrer"><i className="fab fa-viber"> </i></a></li>
                </ul>
            </div>
        );
    }
}

export default SocialNetwork;