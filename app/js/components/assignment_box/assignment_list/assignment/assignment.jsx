var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

module.exports = React.createClass({

  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.handleSubmit(this.props.id, this.props.context, this.props.updateAssignments);
  },

  render: function() {
    return(
      <li>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Submit Assignment" />
        </form>
      </li>
    );
  }
});
