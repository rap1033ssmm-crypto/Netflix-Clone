function Watch() {
  return (
    <>
      <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
        {/* left */}
        <div className="left mb-10 lg:mb-0 md:mb-0 sm:mb-0">
          <h2 className="text-white font-bold lg:text-5xl md:text-5xl text-3xl text-center lg:text-start md:text-start sm:text-start mb-5">
            Watch everywhere
          </h2>
          <p className="text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start sm:text-start">
            Stream unlimited movies and TV shows on your <br /> phone, tablet,
            laptop, and TV.
          </p>
        </div>
        {/* Right */}
        <div className="right">
   <div style={ { position: "relative", width: "100%", maxWidth: "800px", margin: "0 auto", background: "#0d0e10", border: "3px solid #141519" } }>
  <video id="famoNationConsole" className="video-js vjs-matrix-theme vjs-16-9 vjs-big-play-button-centered" controls preload="auto" width="720" poster="https://raw.githubusercontent.com/rap1033ssmm-crypto/famo-nation-broadcast-matrix-engine/main/poster.jpg">
    <source src="https://raw.githubusercontent.com/rap1033ssmm-crypto/the-famo-legacy-omnisphere-metadata-registry/main/cozy-ready.mp4" type="video/mp4" />
  </video>
</div>

        </div>
      </div>
      <div className="hr_line"></div>
    </>
  );
}

export default Watch;
