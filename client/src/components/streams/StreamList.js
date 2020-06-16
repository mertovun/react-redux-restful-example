import React, { Component } from "react";

import { connect } from "react-redux";
import { listStreams, deleteStream } from "../../actions";

import { Link } from "react-router-dom";
import history from "../../history";

export class StreamList extends Component {
  componentDidMount() {
    this.props.listStreams();
  }

  renderEditCreateButtons = (stream) => (
    <div className="right floated content buttons">
      <Link to={"/streams/edit/" + stream.id} className="ui button primary">
        Edit
      </Link>
      <Link to={"/streams/delete/" + stream.id} className="ui button negative">
        Delete
      </Link>
    </div>
  );

  renderStreamItem = (stream) => (
    <div className="stream-item item" key={stream.id}>
      {this.props.auth.userId !== stream.userId
        ? null
        : this.renderEditCreateButtons(stream)}
      <i className="large middle aligned icon camera"></i>
      <div className="content">
        <Link to={"/streams/" + stream.id}>{stream.title}</Link>
        <div className="stream-description description">
          {stream.description}
        </div>
      </div>
    </div>
  );

  render() {
    const streams = Object.values(this.props.streams).map((stream) =>
      this.renderStreamItem(stream)
    );
    return (
      <div>
        <h2>Streams</h2>
        <div className="stream-list ui celled list">
          {streams}
          {!this.props.auth.isSignedIn ? null : (
            <div style={{ textAlign: "right" }}>
              <Link to="/streams/new" className="ui button primary">
                Create Stream
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => ({ streams, auth });

const mapDispatchToProps = { listStreams, deleteStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
