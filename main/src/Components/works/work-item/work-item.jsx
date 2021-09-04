import React, {Component} from 'react';
import './work-item.css';

class WorkItem extends Component {
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
                <div className="work-descr">
                    {this.props.descr}
                </div>
                <div className="work-layout">
                    <a href={this.props.layout} target="_blank">Макет</a>
                </div>
                <div className="work-watch">
                    <a href={this.props.watch} target="_blank">Смотреть</a>
                </div>
            </div>
        );
    }
}

export default WorkItem;