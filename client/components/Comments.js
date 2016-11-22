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

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
    },

    render () {
        return (
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
});

export default Comments;