import * as esbuild from "esbuild-wasm";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) {
      return;
    }
    /*const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    });*/
    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
    });

    // console.log(result);
    // setCode(result.code);
    setCode(result.outputFiles[0].text);
  };

  return (
    <h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </h1>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
