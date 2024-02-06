import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./edit-styles.css";

export const Edit = () => {
  const history = useHistory();

  const onGoToEditPage = () => {
    history.push("/view");
  };

  return (
    <div className="wrapper">
      <h1>Edit Page</h1>
      <button className="button" onClick={onGoToEditPage}>
        Go to View Page
      </button>
    </div>
  );
};
