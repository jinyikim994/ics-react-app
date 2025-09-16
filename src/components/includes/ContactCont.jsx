import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h2 className="title">CONTACT</h2>
        <div className="info-wrap">
          {/* Creatives Column */}
          <div className="column">
            <div className="title">CREATIVES</div>
            <div className="info">
              <label>E-mail</label>
              <p>creative@iconicseoul.com</p>
            </div>
            <div className="info">
              <label>Call</label>
              <p>+82 10.7935.8410</p>
            </div>
            <div className="info">
              <label>Address</label>
              <p>2F, 142-4, Gwangnaru-ro, Seongdong-gu, Seoul, Republic of Korea</p>
            </div>
          </div>

          {/* Models Column */}
          <div className="column">
            <div className="title">MODELS</div>
            <div className="info">
              <label>E-mail</label>
              <p>model@iconicseoul.com</p>
            </div>
            <div className="info">
              <label>Call</label>
              <p>+82 10.2813.0305</p>
            </div>
            <div className="info">
              <label>Business Registration</label>
              <p>892.427139.323</p>
            </div>
            <div className="insta">
              <a href="#" aria-label="Instagram">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;