import "./Main.scss";
import { Parallax } from "react-scroll-parallax";
export default function Main(props:{ header: string, info: string }) {
  return (
    <>
      <Parallax
        translateX={["0px", "0px"]}
        scale={[0.7, 1]}
        rotate={[0, 0]}
        easing="easeInQuad"
      >
        <div className="main">
            <h1 className="main_header">
              {props.header}
            </h1>
        </div>
      </Parallax>
    </>
  );
}
