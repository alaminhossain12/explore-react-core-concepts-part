import "./App.css";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import Counter from "./components/Counter/Counter";
import Photos from "./components/Photos/Photos";
import Posts from "./components/Posts/Posts";
import Team from "./components/Team/Team";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <h1>React Core Concepts Part Two Practice</h1>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Photos></Photos>
      <Albums></Albums>
      <Comments></Comments>
      <Posts></Posts>
    </>
  );
}

export default App;
