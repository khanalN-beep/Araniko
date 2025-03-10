import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-teal-600 text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Access */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Access</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200">
                    BBA Course
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    BCA Course
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Our Alumni
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Visitors
                  </a>
                </li>
              </ul>
            </div>

            {/* Student Corner */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Student Corner</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Youtube Channel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Online Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Results - KUD
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Notifications
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
              <ul className="space-y-2">
                <li>+977-01-5522007</li>
                <li>araniko@gmail.com</li>
                <li>Bhanimandal-4 Lalitpur</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center hover:text-gray-200">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.3,10.2h-4.2V7.1c0-1,0.7-1.3,1.2-1.3h2.9V2.1L13.8,2c-4.4,0-5.3,3.2-5.3,5.3v2.9H5.7v4.4h2.9V22h5.5v-7.4h3.7L18.3,10.2z" />
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-gray-200">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.6,4.8c-0.9,0.4-1.8,0.6-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.3,4.1,6.3,1.7,3.2C1.2,4,1,4.9,1,5.9c0,1.7,0.9,3.2,2.2,4c-0.8,0-1.6-0.2-2.2-0.6v0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.1,6.6,22.9,5.7,23.6,4.8z" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-gray-200">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2c-2.7,0-3,0-4.1,0.1c-1.1,0-1.8,0.2-2.4,0.5C4.8,2.8,4.3,3.2,3.8,3.7C3.3,4.2,2.9,4.8,2.6,5.4C2.4,6,2.2,6.8,2.1,7.9C2.1,9,2,9.3,2,12s0,3,0.1,4.1c0,1.1,0.2,1.8,0.5,2.4C2.8,19.2,3.2,19.7,3.7,20.2c0.5,0.5,1.1,0.9,1.7,1.2c0.6,0.2,1.4,0.4,2.4,0.5C9,21.9,9.3,22,12,22s3,0,4.1-0.1c1.1,0,1.8-0.2,2.4-0.5c0.6-0.2,1.2-0.7,1.7-1.2c0.5-0.5,0.9-1.1,1.2-1.7c0.2-0.6,0.4-1.4,0.5-2.4C21.9,15,22,14.7,22,12s0-3-0.1-4.1c0-1.1-0.2-1.8-0.5-2.4c-0.2-0.6-0.7-1.2-1.2-1.7c-0.5-0.5-1.1-0.9-1.7-1.2c-0.6-0.2-1.4-0.4-2.4-0.5C15,2.1,14.7,2,12,2zM12,3.8c2.7,0,3,0,4,0.1c1,0,1.5,0.2,1.8,0.3c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,1c0.2,0.3,0.3,0.8,0.3,1.8c0,1,0.1,1.3,0.1,4s0,3-0.1,4c0,1-0.2,1.5-0.3,1.8c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.2-0.8,0.3-1.8,0.3c-1,0-1.3,0.1-4,0.1s-3,0-4-0.1c-1,0-1.5-0.2-1.8-0.3c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.3-0.3-0.8-0.3-1.8c0-1-0.1-1.3-0.1-4s0-3,0.1-4c0-1,0.2-1.5,0.3-1.8c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.6-0.5,1-0.7c0.3-0.2,0.8-0.3,1.8-0.3C9,3.8,9.3,3.8,12,3.8zM12,6.9c-2.8,0-5.1,2.3-5.1,5.1s2.3,5.1,5.1,5.1s5.1-2.3,5.1-5.1S14.8,6.9,12,6.9zM12,15.3c-1.8,0-3.3-1.5-3.3-3.3S10.2,8.7,12,8.7s3.3,1.5,3.3,3.3S13.8,15.3,12,15.3zM17.3,6.7c0,0.7-0.5,1.2-1.2,1.2c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2C16.8,5.5,17.3,6,17.3,6.7z" />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-gray-200">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.7,5.3c-0.2-0.8-0.8-1.4-1.6-1.6C16.5,3.3,12,3.3,12,3.3s-4.5,0-6.1,0.4C5.1,3.9,4.5,4.5,4.3,5.3C3.9,6.9,3.9,10,3.9,10s0,3.1,0.4,4.7c0.2,0.8,0.8,1.4,1.6,1.6C7.5,16.7,12,16.7,12,16.7s4.5,0,6.1-0.4c0.8-0.2,1.4-0.8,1.6-1.6c0.4-1.6,0.4-4.7,0.4-4.7S20.1,6.9,19.7,5.3z M10,12.5V7.5l4.1,2.5L10,12.5z" />
                    </svg>
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
