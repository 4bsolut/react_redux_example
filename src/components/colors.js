import { connect } from "react-redux";
import update_color from "../store/color/action";

const Colors = ({ update_color }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <button
            onClick={() => {
              update_color("background:#c62828");
            }}
            value="background:#c62828"
            Style="background:#c62828;width:100%"
            className="waves-effect waves-light btn-large"
          >
            &nbsp;
          </button>
        </div>
        <div className="col s4">
          <button
            onClick={() => {
              update_color("background:#6a1b9a");
            }}
            value="background:#6a1b9a"
            Style="background:#6a1b9a;width:100%"
            className="waves-effect waves-light btn-large"
          >
            &nbsp;
          </button>
        </div>
        <div className="col s4">
          <button
            onClick={() => {
              update_color("background:#c5cae9");
            }}
            value="background:#c5cae9"
            Style="background:#c5cae9;width:100%"
            className="waves-effect waves-light btn-large"
          >
            &nbsp;
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { update_color })(Colors);
