import logo from "./image.png";

export function Navbar() {
  return (
    <>
      <div className="bg-white">
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <h2>Crypto Taxes</h2>
          <h2>Crypto Taxes</h2>
          <h2>Crypto Taxes</h2>
          <button className="bg-blue-500">Get Started</button>
        </div>
      </div>
    </>
  );
}
