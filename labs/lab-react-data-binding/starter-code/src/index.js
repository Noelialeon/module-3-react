import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foods: foods, actualFood: foods, query: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let searchTerm = event.target.value;
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      if (
        foods[i].name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1
      ) {
        result.push(foods[i]);
      }
      this.setState({
        query: event.target.value,
        actualFood: result
      });
    }
  }

  addFood(i) {
    let addFood = this.state.actualFood.slice();
    addFood[i].quantity++;
    this.setState({
      actualFood: addFood
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.actualFood.map((food, i) => (
          <div key={i} id={i} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} alt="image-not-found" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      value={food.quantity}
                    />
                  </div>
                  <div className="control">
                    <button
                      className="button is-info"
                      onClick={() => this.addFood(i)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
