import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const data = `
  import React from "react";

  const App = () => {
    return <div className="max-w-40 f-full bg-slate-500 border-2 rounded-2xl">
        <div className="flex flex-col p-10">
          <div className="flex items-center justify-between">
            <img  src="/images/tran_duoc.png" className="w-24 h-24 rounded-full" alt="Trần Minh Được" />
          </div>
          <div className="mt-4 text-slate-600">
            <h2 className="text-blue-600">Trần Được</h2>
            <p>
              <span>Lập trình viên Front-End / Back-End</span>
            </p>
          </div>
        </div>
    </div>
  }  

export default App;
`;

function CodeEditor() {
  const onChange = React.useCallback((value: string, viewUpdate: any) => {
    console.log("value:", value);
    console.log("value:", viewUpdate);
  }, []);
  return (
    <div className=" shadow-2xl shadow-slate-800 border-slate-600 rounded-2xl ">
      <CodeMirror
        value={data}
        extensions={[javascript({ jsx: true, typescript: true })]}
        onChange={onChange}
        readOnly
        theme={"dark"}
        className="text-lg h-full "
      />
    </div>
  );
}
export default CodeEditor;
