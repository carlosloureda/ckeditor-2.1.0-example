import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Edit = () => {
  const history = useHistory();

  const onGoToEditPage = () => {
    history.push("/view");
  };

  return (
    <div>
      <h1>Edit Page</h1>
      <button onClick={onGoToEditPage}>Go to View Page</button>
    </div>
  );
};
