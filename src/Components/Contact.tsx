import Email from '../GenericLogos/email.png';
import Github from '../GenericLogos/github.png';
import Facebook from '../GenericLogos/facebook.png';
import Twitter from '../GenericLogos/twitter.png';

export function Contact() {
  return (
    <div
      className="h-screen pt-20 flex flex-col items-center justify-center"
      id="contact"
    >
      <h1 className="sm:text-6xl text-3xl text-center font-semibold antialiased text-white mb-10">
        Contact Information
      </h1>
      
      <div className="sm:m-10">
        <div className="flex items-center">
          <img className="w-10" src={Email} alt="email" />
          <span className="sm:ml-5 ml-1 text-white font-semibold sm:text-xl">mdgaziurrahmannoor@gmail.com</span>
        </div>
        <div className="flex items-center mt-5">
          <img className="w-10" src={Github} alt="email" />
          <span className="sm:ml-5 ml-1 text-white font-semibold sm:text-xl">mdgaziur</span>
        </div>
        <div className="flex items-center mt-5">
          <img className="w-10" src={Facebook} alt="email" />
          <span className="sm:ml-5 ml-1 text-white font-semibold sm:text-xl">real.mdgaziur.rahmanoor</span>
        </div>
        <div className="flex items-center mt-5">
          <img className="w-10" src={Twitter} alt="email" />
          <span className="sm:ml-5 ml-1 text-white font-semibold sm:text-xl">mdgaziurrahman7</span>
        </div>
      </div>
    </div>
  );
}
