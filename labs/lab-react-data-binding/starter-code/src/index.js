import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";

class Search extends React.Component {
  render() {
    // console.log(this.props.search, this. props.onChange);
    return (
      <input
        type="text"
        value={this.props.search}
        onChange={this.props.onChange}
      />
    );
  }
}

class FoodCard extends React.Component {

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt="image-not-found" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.props.food.quantity}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foods: foods, actualFood: foods, search: "" };
  }

  showFood(search, food) {
    let searchTerm = search;
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      if (
        foods[i].name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1
      ) {
        result.push(
          <FoodCard  key={i} id={i} food={foods[i]} />
        );
      }
    }
    return result;
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Search
          search={this.state.search}
          onChange={e => {
            this.setState({ search: e.target.value });
          }}
        />
        <div className="columns">
          <div className="column">{this.showFood(this.state.search)}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
