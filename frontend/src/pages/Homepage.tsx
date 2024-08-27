import landingPhone from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5 rounded-lg shadow-md bg-white py-8 items-center -mt-20">
        <h1 className="text-5xl tracking-tight text-orange-600 font-bold">
          Tuck into takeaway today
        </h1>
        <span className="text-xl">food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingPhone} alt="phone image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order taken away even faster!
          </span>
          <span>
            Download foodz app for faster ordering and extra recommendation
            benefits
          </span>
          <img src={appDownloadImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
