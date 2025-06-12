import "./App.css";
import File from "./components/file";
import Folder from "./components/folder";
import { explorer } from "./files";

function App() {
  console.log(explorer);

  return (
    <div>
      {explorer.map((item, index) => {
        return (
          <div key={index}>
            {item.type === "file" ? (
              <File file={item} />
            ) : (
              <Folder folder={item} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;