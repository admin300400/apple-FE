import Logo from "./Logo";
import "./navbar.css";
const Navbar1 = () => {
  return (
    <nav className="font-light text-xs text-white relative">
      <div className="nav flex justify-between md:justify-center md:px-20 lg:px-30 px-8 items-center min-w-[100vw] min-h-[45px] text-[#f5f5f7]">
        <div className="flex flex-col gap-[0.4rem] md:hidden">
          <div className="w-6 h-[0.1rem] rounded-sm bg-slate-50"></div>
          <div className="w-6 h-[0.1rem] rounded-sm bg-slate-50"></div>
          <div className="w-6 h-[0.1rem] rounded-sm bg-slate-50"></div>
        </div>
        <a href="/">
          <Logo className="w-[20px] font-white  flex md:hidden" />
        </a>
        <menu className="gap-4 md:gap-8 hidden md:flex md:items-center font-thin">
          <a href="/">
            <Logo className="w-[20px] font-white hidden md:flex md:mr-12 lg:mr-20" />
          </a>
          <p className="cursor-pointer hover:font-light">Store</p>
          <p className="cursor-pointer hover:font-light">Mac</p>
          <p className="cursor-pointer hover:font-light">iPad</p>
          <p className="cursor-pointer hover:font-light">iPhone</p>
          <p className="cursor-pointer hover:font-light">Watch</p>
          <p className="cursor-pointer hover:font-light">AirPods</p>
          <p className="cursor-pointer hover:font-light">TV & Home</p>
          <p className="cursor-pointer hover:font-light">Only on Apple</p>
          <p className="cursor-pointer hover:font-light">Accessories</p>
          <p className="cursor-pointer hover:font-light">Support</p>
          <div className="w-4 ml-10 md:ml-12 lg:ml-20 hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z"></path>
            </svg>
          </div>
        </menu>
        <div className="w-4 block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
