'use strict';

const e = React.createElement;

class ButtonSubscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'Confirm your e-mail, please';
        }

        return e(
            'div',
            { onClick: () => this.setState({ liked: true }) },
            'Subscribe now'
        );
    }
}

const domContainer = document.querySelector('.ButtonSubscribe');
ReactDOM.render(e(ButtonSubscribe), domContainer);