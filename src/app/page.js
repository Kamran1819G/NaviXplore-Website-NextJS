import Image from "next/image";
import "./home.scss";
import navixplore from "../assets/images/navixplore-screen.jpg";
import BusLiveTracking from "../assets/images/bus-live-tracking.jpg";

export default function Home() {
  return (
    <main>
      <div className="custom-hero container lg:h-screen">
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2  text-center">
            <div className="content">
              <h1 className="my-3 text text-5xl font-semibold">
                Navi<span className="text-6xl">X</span>plore{" "}
                <span className="text-3xl">- Navi Mumbai Guide App</span>
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
          <div className="lg:w-1/2 flex flex-wrap lg:flex-row sm:flex-col items-center justify-center">
            <div className="relative mx-auto my-5 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <Image
                  src={navixplore}
                  alt="NaviXplore-Screen"
                  className="w-[272px] h-[572px]"
                />
              </div>
            </div>
            <div className="relative mx-auto my-5 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <Image
                  src={BusLiveTracking}
                  alt="NaviXplore-Screen"
                  className="w-[272px] h-[572px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
