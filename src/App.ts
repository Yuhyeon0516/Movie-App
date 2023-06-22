import { Component } from "./core/yuhyeon";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const routerView = document.createElement("router-view");
    const theFooter = new TheFooter().el;

    this.el.append(theHeader, routerView, theFooter);
  }
}
