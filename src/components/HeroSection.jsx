import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <div
        className="lg:h-[44.5em] md:h-[44em] h-[34em]"
        style={{
          background:
            "linear-gradient(80deg,black,transparent),url(https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        }}
      >
        <Navbar />
        {/* HeroSection */}
        <div className="hero_section flex mx-auto justify-center items-center h-96">
          <div className="">
                 <h1 className="text-white text-center text-3xl px-5 md:text-5xl lg:text-5xl font-extrabold mb-5 uppercase tracking-wide">
            F-L-O Credential Verification
          </h1>
          <p className="text-white text-center lg:text-2xl md:text-2xl text-xl font-bold mb-5">
            Famo-Legacy Omnisphere Intelligence Bureau • Node 28
          </p>
          <p className="text-[#d4af37] text-center lg:text-xl md:text-xl text-lg font-bold mb-5 tracking-wider">
            MASTER REGISTRY RECONNAISSANCE CODE: ISSN 3143-9756
          </p>

            </p>
          
          </div>
        </div>
      </div>
      <div className="hr_line"></div>
    </>
  );
}

export default HeroSection;
