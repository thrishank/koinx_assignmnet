export function Fundamnetals() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Component text={"Bitcoin Price"} number={"$" + 12 + "," + 231.23} />
      {/* <Component text={"Bitcoin Price"} number={"$" + 12 + "," + 231.23} /> */}
    </div>
  );
}

function Component({ text, number }) {
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center">
        <div className=" from-neutral-400 pr-20">{text}</div>
        <div>{number}</div>
      </div>
      <hr className="h-px my-4 border-0 bg-slate-400"></hr>
    </div>
  );
}
