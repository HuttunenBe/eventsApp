import { FadeLoader } from "react-spinners";
import "./loading.css";

const Loader = () => {
  return (
    <div className="loader">
      <FadeLoader size={60} color="#8338ec" />     {/* Keep size and color here -> Spinner does not support css styling with them */}
    </div>
  );
};

export default Loader;
