import React, { Component } from "react";
import axios from "axios";
import IdeaForm from "./IdeaForm";
import Idea from "./Idea";

class IdeasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
      editingIdeaId: null,
      notification: ""
    };
  }

  handleInput = e => {
    this.props.resetNotification();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/ideas")
      .then(response => {
        console.log(response);
        this.setState({ ideas: response.data });
      })
      .catch(error => console.log("error"));
  }

  addNewIdea = () => {
    axios
      .post("http://localhost:3001/ideas", {
        idea: {
          title: "",
          text: "",
          image: "",
          state: ""
        }
      })
      .then(response => {
        console.log(response);
        const ideas = this.state.ideas;
        this.setState({ ideas: ideas, editingIdeaId: response.data.id });
      })
      .catch(error => console.log("error"));
  };

  updateIdea = idea => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id);
    const ideas = (this.state.ideas, { [ideaIndex]: { $set: idea } });
    this.setState({ ideas: ideas, notification: "bucket list idea updated" });
  };

  deleteIdea = id => {
    axios
      .delete(`http://localhost:3001/ideas/${id}`)
      .then(response => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === id);
        const ideas = (this.state.ideas, { $splice: [[ideaIndex, 1]] });
        this.setState({ ideas: ideas });
      })
      .catch(error => console.log(error));
  };

  resetNotification = () => {
    this.setState({ notification: "" });
  };

  enableEditing = id => {
    this.setState({ editingIdeaId: id }, () => {
      this.title.focus();
    });
  };

  // handleClick = () => {
  //   this.props.onClick(this.props.idea);
  // };

  render() {
    return (
      <div>
        <div>
          <button className="new-idea-button" onClick={this.addNewIdea}>
            New Item
          </button>
        </div>

        {this.state.ideas.map(idea => {
          if (this.state.editingIdeaId === idea.id) {
            return (
              <IdeaForm
                idea={idea}
                key={idea.id}
                updateIdea={this.updateIdea}
                titleRef={input => (this.title = input)}
              />
            );
          } else {
            return (
              <Idea
                idea={idea}
                key={idea.id}
                onClick={this.enableEditing}
                onDelete={this.deleteIdea}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default IdeasContainer;
