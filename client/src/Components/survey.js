import React, { Component } from "react";

class Survey extends Component {

    state = {
        title: '',
        description: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        this.props.addSurvey(this.state)
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>title</p>
                <input type="text"
                    name="title"
                    placeholder="write some title"
                    value={this.state.title}
                    onChange={this.onChange}
                >
                </input>

                <p>description</p>
                <input type="text"
                    name="description"
                    placeholder="write some description"
                    value={this.state.description}
                    onChange={this.onChange}
                >
                </input>
                <br /><br />

                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }

}

export default Survey;