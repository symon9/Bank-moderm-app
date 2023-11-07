import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between start-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="mt-6 leading-7 font-montserrat text-base text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards{" "}
          </p>
          <div className="flex items-center gap-5 mt-8 mb-5">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img 
                  src={icon.src} 
                  width={24} 
                  height={24} 
                  alt={icon.alt} 
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
               {
                footerLinks.map((section) => (
                  <div className="" key={section}>
                    <h4 className="text-white font-montserrat text-2xl leading-normal font-mdeium mb-6">{section.title}</h4>
                    <ul>
                      {
                        section.links.map((link) => (
                          <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                            <a href="" className="">{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
               } 
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col border-t-2 pt-6 max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
               <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
               <p>Copyright. All right Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>

      </div>
    </footer>
  );
};

export default Footer;
