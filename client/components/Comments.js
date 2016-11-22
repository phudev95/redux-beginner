import React from 'react';

const Comments = React.createClass({
    renderComment (item, i) {
        return (
            <div className="item" key={i}>
                <p>
                    <strong>{item.user}</strong>
                    {item.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    },

    render () {
        return (
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form">
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
});

export default Comments;