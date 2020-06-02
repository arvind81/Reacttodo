import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./container/Todoinput";
import Todolist from "./container/Todolist";

export default class App extends Component {
  render() {
    return (
      <div>
        <Todoinput />
        <Todolist />
      </div>
    );
  }
}
