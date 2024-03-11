import { Heading } from "../components/heading";
import logo from "../assets/logo.png";
export function Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between">
        <div className="flex items-center px-8">
          <img
            src={logo}
            className="h-10 p-2 flex items-center cursor-pointer"
          />
        </div>
        <div className="flex justify-end items-center p-2 h-max align-middle">
          <Heading text={"Crypto Taxes"} />
          <Heading text={"Free Tools"} />
          <Heading text={"Resource Center"} />
          <div className="px-6">
            <button className="bg-blue-600 text-white rounded-lg px-4 py-1">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
