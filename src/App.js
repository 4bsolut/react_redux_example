import "./styles.css";

import Colors from "./components/colors";
import Main from "./components/main";
export default function App() {
  return (
    <div className="App">
      <Main />
      <footer className="page-footer">
        <Colors />
      </footer>
    </div>
  );
}
