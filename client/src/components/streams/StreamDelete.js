import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    const actions = (
      <React.Fragment>
        <div
          className="ui negative button"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
        >
          Delete
        </div>
        <Link to={"/"} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure?"
          actions={actions}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(null, { deleteStream })(StreamDelete);
