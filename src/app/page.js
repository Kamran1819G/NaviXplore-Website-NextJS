import Image from "next/image";
import "./home.scss";
import navixplore from "../assets/images/navixplore-screen.jpg";
import BusLiveTracking from "../assets/images/bus-live-tracking.jpg";

export default function Home() {
  return (
    <main>
      <div className="custom-hero container lg:h-screen">
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 md:w-1/2 text-center">
            <div className="content">
              <h1 className="my-3 text text-5xl font-semibold">
                Navi<span className="text-6xl">X</span>plore
              </h1>
              <h2 className="my-3 text-xl font-semibold">
                Making commute easy for everyone...
              </h2>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="mr-4">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="get-on-playstore"
                  className="w-48 rounded-btn"
                />
              </div>
              <div>
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                  alt="get-on-appstore"
                  className="w-40 rounded-btn"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 flex lg:flex-row sm:flex-col items-center justify-center mt-5">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <Image src={navixplore} alt="NaviXplore-Screen" height={550} />
              </div>
            </div>
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <Image
                  src={BusLiveTracking}
                  alt="NaviXplore-Screen"
                  height={550}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
