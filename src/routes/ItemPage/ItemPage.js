import React from "react";
import config from "../../config";
import Img from "react-image";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import './ItemPage.css';

export default class ItemPage extends React.Component {
  static defaultProps = {
    match: {}
  };

  state = {
    item: {}
  };

  componentDidMount() {
    const itemId = this.props.match.params.item_id;
    Promise.all([
      fetch(
        `${config.API_ENDPOINT}/items/item/${itemId}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${TokenService.getAuthToken()}`
          }
        }
      )
    ])
      .then(([itemRes]) => {
        if (!itemRes.ok) return itemRes.json().then(e => Promise.reject(e));
        return Promise.all([itemRes.json()]);
      })
      .then(([item]) => {
        this.setState({ item });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    return (
      <div className="ItemContainer">
        <h2 className="ItemTitle">{this.state.item.title}</h2>
        <Img
          className="ItemImage"
          src={this.state.item.image_url}
        />
        <p className="ItemInfo">
          <span className="Info">Info:</span>  {this.state.item.info}
        </p>
        <p className="ItemYearReleased">
        <span className="YearReleased">Year Released:</span> {this.state.item.year_released}
        </p>
        <Link
          to={{
            pathname: "/update",
            state: { item: this.state.item }
          }}
          className="ItemEdit"
          type="button"
          item={this.state.item}
        >
          <button className="EditItemButton">
            Edit Item
          </button>
        </Link>
      </div>
    );
  }
}
