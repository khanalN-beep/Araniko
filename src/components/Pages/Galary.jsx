import React from "react";
import man from "../../assets/man.png"; // Ensure the path is correct

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Image */}
      <header className="relative">
        <img
          src={man} // Use the imported image
          alt="Header Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">Finibus Bonorum et Malorum</h1>
            <p className="text-lg font-medium mt-2">
              Written by John Doe{" "}
              <span className="font-light">| Monday, May 20</span>
            </p>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        {/* Table of Contents */}
        <aside className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li>
              <a href="#section1" className="text-teal-600 hover:underline">
                Section 1.0.32
              </a>
            </li>
            <li>
              <a href="#section2" className="text-teal-600 hover:underline">
                Section 1.0.33
              </a>
            </li>
            <li>
              <a href="#section3" className="text-teal-600 hover:underline">
                Section 1.0.34
              </a>
            </li>
            <li>
              <a href="#section4" className="text-teal-600 hover:underline">
                Section 1.0.35
              </a>
            </li>
            <li>
              <a href="#section5" className="text-teal-600 hover:underline">
                Section 1.0.36
              </a>
            </li>
          </ul>
        </aside>

        {/* Section 1 */}
        <section id="section1" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Section 1.0.32</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain...
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>

        {/* Section 2 */}
        <section id="section2" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Section 1.0.33</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident..."
          </p>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>

        {/* Section 3 */}
        <section id="section3" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Section 1.0.34</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo."
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </section>

        {/* Section 4 */}
        <section id="section4" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Section 1.0.35</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness."
          </p>
          <p className="text-gray-700 leading-relaxed">
            No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
        </section>

        {/* Section 5 */}
        <section id="section5" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Section 1.0.36</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure."
          </p>
          <p className="text-gray-700 leading-relaxed">
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a
            pleasure that has no annoying consequences, or one who avoids a pain
            that produces no resultant pleasure?
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-teal-600 text-white p-8 rounded-lg text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Enjoyed the Article?</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter for more insightful content!
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="bg-gray-800 text-white px-6 py-2 rounded-r-lg hover:bg-gray-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <footer>
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
                    <a
                      href="#"
                      className="flex items-center hover:text-gray-200"
                    >
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
                    <a
                      href="#"
                      className="flex items-center hover:text-gray-200"
                    >
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
                    <a
                      href="#"
                      className="flex items-center hover:text-gray-200"
                    >
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
                    <a
                      href="#"
                      className="flex items-center hover:text-gray-200"
                    >
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
      </footer>
    </div>
  );
};

export default BlogPage;
