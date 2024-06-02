import React from "react";

const Footer = () => {
  return (
    <div className="h-60 w-auto bg-transparent">
        <footer
        style={{
            backgroundImage: "url('/images/footer.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
        className="relative z-10 text-white py-24 mt-32"
        >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 center-text">
            {/* Logo and Description */}
            <div className="text-center md:text-wrap">
            <img src="/images/logo.png" alt="Logo" className="mx-auto md:mx-0 h-24 mb-4" />
            <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur. Dis elit vestibulum risus bibendum mauris faucibus. Neque at porta viverra aliquam posuere a montes semper porta. Massa.
            </p>
            <p className="mt-4 text-xs">
                Lorem ipsum dolor sit amet consectetur. Quam id ultricies aliquam ut id diam.
            </p>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-wrap mx-10 center-text">
                <h3 className="font-bold mb-4">Newsletter</h3>
                <p className="mb-4 text-xs">
                    Lorem ipsum dolor sit amet consectetur. Eget morbi arcu.
                </p>
                <form className="flex items-center justify-center md:justify-start mt-8 mr-16">
                    <input type="email" placeholder="ENTER YOUR EMAIL" className="px-4 py-2 rounded-l-full focus:outline-none text-black" />
                    <button className="px-4 py-2 bg-green-700 text-black rounded-r-full hover:bg-green-800 transition duration-300">
                    SUBSCRIBE
                    </button>
                </form>
            </div>

            {/* Opening Hours */}
            <div className="text-center md:text-wrap center-text ml-9">
            <h3 className="font-bold mb-4">Opening Hours</h3>
            <p className="mb-4 text-xs">
                Lorem ipsum dolor sit amet consectetur. Sit tellus lacus cras tortor orci tellus. Feugiat enim bibendum tellus malesuada.
            </p>
            <ul className="text-xs">
                <li><strong>Mon-Thu :</strong> 7.00AM - 6.00PM</li>
                <li><strong>Sat :</strong> 7.00AM - 4.00PM</li>
                <li><strong>Sun :</strong> 7.00AM - 1.00PM</li>
            </ul>
            </div>

            {/* Contact Us */}
            <div className="text-center md:text-wrap center-text">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-xs"><strong>Hotline:</strong> 0818-0229-6099</p>
            <p className="text-xs"><strong>Email:</strong> support@doggourmet.com</p>
            </div>
        </div>
        </footer>
    </div>

  );
};

export default Footer;
