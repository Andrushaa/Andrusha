import React, { Component } from 'react';
import './works.css';
import WorkItem from "./work-item/work-item";
import imageSOS from "./work-item/img/SOS-layout.png"
import imageZEN from "./work-item/img/ZEN-layout.png"
import imageMeditation from "./work-item/img/Mediation-layout.png"


class Works extends Component {
    render() {
        return (

            <div className="Works">
                <WorkItem image={imageSOS}
                          title="SOS"
                          descr="Жанр: сайт игры"
                          layout="https://www.figma.com/file/tiZx1DOQI8uGgUjqG6w1Ag/SOS"
                          watch="https://andrushaa.github.io/Andrusha/figma/SOS/index.html"
                />
                <WorkItem image={imageZEN}
                          title="ZEN"
                          descr="Жанр: сайт банковских услуг"
                          layout="https://www.figma.com/file/WV1PK3Op5jELDez1MtKDgP/ZEN"
                          watch="https://andrushaa.github.io/Andrusha/figma/ZEN/index.html"
                />
                <WorkItem image={imageMeditation}
                          title="Meditation"
                          descr="Жанр: курсы по йоге и медитации"
                          layout="https://www.figma.com/file/U3ItkI1Clw5fz5uDBwuVbf/Meditation"
                          watch="https://andrushaa.github.io/Andrusha/figma/Mediation/index.html"
                />
            </div>
        );
    }
}

export default Works;