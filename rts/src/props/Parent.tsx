// import {Child} from "./Child";
import { Child } from "./Child";

/*const Parent = () => {
    return <Child color="red" onClick={() => console.log('Clicked')}>
        asdf
    </Child>
}*/
const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("clicked")}>
      1
    </Child>
  );
};

export default Parent;
