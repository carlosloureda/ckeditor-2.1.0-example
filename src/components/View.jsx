import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Editor } from "./Editor";
import "./view-styles.css";

const dummy_text =
  "porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat";

const NUMBER_OF_EDITORS = 100;

export const View = () => {
  const history = useHistory();

  const onGoToEditPage = () => {
    history.push("/edit");
  };

  return (
    <div className="wrapper">
      <h1>View Page</h1>
      <button className="button" onClick={onGoToEditPage}>
        Go to Edit Page
      </button>
      <div className="editors-container">
        {Array.from({ length: NUMBER_OF_EDITORS }).map((editor, i) => {
          const data = `CK EDITOR #${i + 1} - ${dummy_text}`;
          return (
            <div key={i} className="editor-wrapper">
              <Editor data={data} id={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
