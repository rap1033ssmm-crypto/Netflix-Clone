import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="main flex p-5 lg:mb-28 md:mb-28 mb-10 justify-between lg:justify-around md:justify-around">
        {/* left */}
        <div className="left">
                 <div className="famo_logo_text">
            <h1 className="text-[#d4af37] font-extrabold text-2xl lg:text-3xl tracking-wider uppercase font-sans">
              F-L-O Credentials
            </h1>
          </div>
          
        </div>
        {/* Right */}
        <div className="right">
          <div className="main flex items-center">
            <div className="selector bg-[#111112] text-white mx-4 px-5 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80">
              <select
                name=""
                id=""
                className=" bg-[#111112] outline-none cursor-pointer"
              >
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <Link to={"/signin"}>
              <button
                type="button"
                className="bg-[#e50815] text-white font-bold px-5 py-1.5 rounded-lg hover:bg-[#d80c1a]"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
