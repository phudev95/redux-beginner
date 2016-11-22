import React from 'react';

const Single = React.createClass({
    render() {
        console.log(this.props);
        return (
            <div className="single-photo">
                I'm the single 2
            </div>
        );
    }
});

export default Single;