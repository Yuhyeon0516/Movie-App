import { Store } from "../core/yuhyeon";

interface State {
  photo: string;
  name: string;
  email: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://avatars.githubusercontent.com/u/120432007?v=4",
  name: "YuHyeon",
  email: "rladbgus0516@naver.com",
  github: "https://github.com/Yuhyeon0516",
  repository: "https://github.com/Yuhyeon0516/Movie-App",
});
