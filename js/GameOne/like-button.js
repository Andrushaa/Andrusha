'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'Благодарю)';
    }

    return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like))'
        );
    }
}

const domContainer = document.querySelector('.button-For-Like');
ReactDOM.render(e(LikeButton), domContainer);