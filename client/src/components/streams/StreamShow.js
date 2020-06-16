import React, { Component } from "react";
import { connect } from "react-redux";
import { getStream } from "../../actions";

export class StreamShow extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    const { stream } = this.props;
    return !stream ? null : (
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description} </h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = { getStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
