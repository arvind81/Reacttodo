import React, { Component } from "react";
import Item from "./item";

export default class Todolist extends Component {
  render() {
    return (
      <div>
        <h1>hello from list</h1>
        <Item />
      </div>
    );
  }
}
