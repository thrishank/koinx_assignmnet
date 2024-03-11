import { Text } from "./text";
import img from "./image.png";

export function Team_Card({ name, desgination }) {
  return (
    <div className="flex bg-sky-300">
      <div className="flex flex-col">
        <img src={img}></img>
        <div>{name}</div>
        <div>{desgination}</div>
      </div>
      <div className="text-center">
        <Text />
      </div>
    </div>
  );
}
