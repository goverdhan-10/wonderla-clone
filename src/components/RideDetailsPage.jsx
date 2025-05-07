import { useParams } from "react-router-dom";
import ridesData from "../data/rideDetails.js";
import FloatingNavbar from "./FloatingNavbar";

const capitalizeWords = str =>
  str.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

const RideDetailsPage = () => {
  const { city, rideName } = useParams();
  const ride = ridesData[city]?.[rideName];

  if (!ride) return <div className="p-[100px] text-center text-white text-3xl">you're on /rides/{city}/{rideName}</div>;

  return (
    <div className="relative min-h-screen bg-white text-black">
      <div className="relative h-[600px] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={ride.videoUrl} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full z-20">
          <FloatingNavbar transparent />
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-10 z-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-medium">
                {capitalizeWords(city)}
              </h2>
              <h1 className="text-white text-6xl sm:text-6xl font-extrabold mt-2 uppercase">
                {capitalizeWords(rideName)}
              </h1>
            </div>
            <div className="flex h-[76px] w-full max-w-[528px] items-center justify-between rounded-[22px] border-[1.5px] border-blue bg-white px-3 pt-[14px] pb-[18px] md:px-4 lg:pr-8">
              <div className="flex h-[38px] w-full max-w-[360px] items-center rounded-[12px] bg-[#334dcf] p-[3px]">
                <div
                  className="relative flex h-full items-center justify-center rounded-md px-2 transition-all duration-500 ease-out"
                  style={{
                    width: `calc(${ride.thrillPercentage}% + 12px)`,
                    backgroundColor: ride.thrillPercentage < 65 ? "#FAD600" : "#E86161",
                  }}
                >
                  <span className="text-sm font-mulish font-black text-white leading-none whitespace-nowrap">
                    {ride.thrillPercentage}%
                  </span>
                </div>
              </div>
              <h4 className="text-sm font-mulish font-black uppercase text-blue-dark leading-none md:w-[92px] text-right">
                Turbo<br />Thrill
              </h4>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center pb-11 pt-16 sm:pb-14 sm:pt-[74px] md:pt-[84px] lg:pb-[65px] lg:pt-[92px]">
        <div className="flex flex-col items-center text-center container-main">
          <h1 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] text-blue-dark sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl">
            Ride Highlights
          </h1>
        </div>

        <div className="mx-auto mt-[22px] flex flex-col gap-3 container-main sm:mt-7 lg:mt-9">
          {ride.highlights.map((highlight, index) => (
            <div key={index} className="flex max-w-[714px] gap-3">
              <div className="flex items-center justify-center rounded-[14px] bg-[#FFF9DD] px-3 py-1">
                <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] sm:w-[28px]">
                  <path d="M19.0489 0.927049C19.3483 0.00573707 20.6517 0.00574017 20.9511 0.927052L24.5922 12.0266C24.7261 12.4359 25.1101 12.7071 25.5431 12.7071H37.2086C38.1762 12.7071 38.5775 13.9448 37.7986 14.5266L28.3765 21.4627C28.0292 21.7169 27.8836 22.1633 28.0175 22.5726L31.6586 33.6722C31.958 34.5935 30.9051 35.3552 30.1262 34.7734L20.7041 27.8373C20.3568 27.5831 19.6432 27.5831 19.2959 27.8373L9.87377 34.7734C9.09487 35.3552 8.042 34.5935 8.34138 33.6722L11.9825 22.5726C12.1164 22.1633 11.9708 21.7169 11.6235 21.4627L2.20139 14.5266C1.42248 13.9448 1.82381 12.7071 2.79139 12.7071H14.4569C14.8899 12.7071 15.2739 12.4359 15.4078 12.0266L19.0489 0.927049Z" fill="#FAD600" stroke="#FAD600" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className="flex flex-1 items-center rounded-[14px] bg-[#FFF9DD] px-3 py-2.5 md:px-3.5 md:py-3.5">
                <p className="text-sm md:text-base inline-block font-mulish !leading-[1.255] font-medium text-blue-dark">
                  {highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a className="inline-block w-full max-w-full mt-[18px] md:mt-9 container-main" target="_blank" href="https://bookings.wonderla.com" rel="noreferrer">
          <div className="capitalize h-14 w-full max-w-[328px] rounded-full text-base font-extrabold leading-tight flex items-center justify-center text-blue bg-yellow mx-auto" tabIndex="0">
            Grab Your Tickets
          </div>
        </a>
      </section>
    </div>
  );
};

export default RideDetailsPage;