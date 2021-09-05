import React, {Component} from 'react';
import './layout-item.css';

class LayoutItem extends Component {
    render() {
        return (
            <div className="work">
                <div className="work-img__wrapper">
                    <div className="work-img">
                        <img
                            src={this.props.image}
                            alt="logo"
                        />
                    </div>
                </div>

                <div className="work-title">
                    {this.props.title}
                </div>
                <div className="work-type">
                    {this.props.descr}
                </div>
                <a href={this.props.layout} target="_blank" rel="noreferrer" className="work-layout">Макет</a>
                <a href={this.props.watch} target="_blank" rel="noreferrer" className="work-watch">Смотреть</a>
            </div>
        );
    }
}

export default LayoutItem;