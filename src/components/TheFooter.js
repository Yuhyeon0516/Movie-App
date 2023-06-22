import { Component } from "../core/yuhyeon";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/Yuhyeon0516/Movie-App">
          Github Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/Yuhyeon0516">
          ${new Date().getFullYear()}
          Yuhyeon
        </a>
      </div>
    `;
  }
}
