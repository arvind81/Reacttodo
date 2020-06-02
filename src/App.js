import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./container/Todoinput";
import Todolist from "./container/Todolist";

export default class App extends Component {
  state = {
    items: [],
    id: "",
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("change");
  };
  handleSubmit = (e) => {
    console.log("submit");
  };
  clearList = (e) => {
    console.log("clear");
  };
  handleDelete = (e) => {
    console.log("del");
  };
  handleEdit = (e) => {
    console.log("edit");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo-list</h3>
            <Todoinput
              it={this.state.it}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <Todolist
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
