interface Props {
  name?: string;
  installing?: boolean;
  done?: boolean;
  running?: boolean;
  start?: boolean;
}

const CodeMockup = ({ name, installing, done, running, start }: Props) => {
  return (
    <div className="mockup-code bg-[#1e1f35] shadow-inner ">
      {start && (
        <pre data-prefix="$">
          <code>npm start {name}</code>
        </pre>
      )}
      {installing && (
        <>
          <pre data-prefix="$">
            <code>npm i {name}</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing... </code>
          </pre>
        </>
      )}
      {done && (
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      )}
      {running && (
        <>
          <pre data-prefix=">" className="text-warning">
            <code>compiling...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>{name} is running</code>
          </pre>
        </>
      )}
    </div>
  );
};

export default CodeMockup;
