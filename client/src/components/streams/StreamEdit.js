import React, { Component } from "react";
import { connect } from "react-redux";
import { getStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import { clearFields } from "redux-form";

export class StreamEdit extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    const { stream } = this.props;
    return !stream ? null : (
      <div>
        <h3>Stream Edit</h3>
        <StreamForm
          initialValues={{
            title: stream.title,
            description: stream.description,
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = { getStream, editStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
