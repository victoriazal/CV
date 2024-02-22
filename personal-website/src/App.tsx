import "./App.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Tv from "./components/tv/TV";
function App() {
  return (
    <>
      <ParallaxProvider>
        <Tv />
      </ParallaxProvider>
    </>
  );
}

export default App;
