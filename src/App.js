import Header from "./components/Header";
import Todos from "./components/Todos";
import ToolBar from "./components/ToolBar";
import { useSelector } from "react-redux";

const App = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className={`${theme && "bg-black"} min-h-screen`}>
      <Header />
      <Todos />
      <ToolBar />
    </div>
  );
};

export default App;
