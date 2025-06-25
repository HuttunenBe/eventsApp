import { FadeLoader } from "react-spinners";
import "./loading.css";

const Loader = () => {
  return (
    <div className="loader">
      <FadeLoader size={60} color="#8338ec" />
    </div>
  );
};

export default Loader;
