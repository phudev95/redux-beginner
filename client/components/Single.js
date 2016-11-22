import React from 'react';

const Single = React.createClass({
    render() {
        console.log(this.props);
        return (
            <div className="single-photo">
                I'm the single
            </div>
        );
    }
});

export default Single;