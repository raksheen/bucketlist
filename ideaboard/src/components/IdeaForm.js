import React, { Component } from "react";
import axios from "axios";

class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.idea.title,
      text: this.props.idea.text,
      image: this.props.idea.image,
      state: this.props.idea.state
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBlur = () => {
    const idea = {
      title: this.state.title,
      text: this.state.text,
      text: this.state.image,
      text: this.state.state
    };
    axios
      .put(`http://localhost:3001/ideas/${this.props.idea.id}`, {
        idea: idea
      })
      .then(response => {
        console.log(response);
        this.props.updateIdea(response.data);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Enter a Title"
            value={this.state.title}
            onChange={this.handleInput}
            ref={this.props.titleRef}
          />
          <textarea
            className="input"
            name="text"
            placeholder="Describe your idea"
            value={this.state.text}
            onChange={this.handleInput}
          />
          <textarea
            className="input"
            name="image"
            placeholder="Insert an image link"
            value={this.state.image}
            onChange={this.handleInput}
          />
          <textarea
            className="input"
            name="state"
            placeholder="U.S. State"
            value={this.state.state}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default IdeaForm;
