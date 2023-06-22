import { Component } from "./core/yuhyeon";
import TheHeader from "./components/TheHeader";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const routerView = document.createElement("router-view");
    this.el.append(theHeader, routerView);
  }
}
