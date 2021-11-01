import { connect } from "react-redux";
import { selectActiveColor } from "../store/color/reducer";

const Main = ({ color }) => {
  return <main Style={color}>{color}</main>;
};

const mapStateToProps = (state) => {
  return {
    color: state.color_reducer.color
  };
};

export default connect(mapStateToProps)(Main);
