import { FOOTER_LINKS, CONTACT_INFO } from "../../utils/helper";

const Footer = () => {
    return (
        <footer className="w-full max-w-[1440px] h-[472px] mx-auto bg-white">
            <div className="max-w-[1200px] mx-auto flex gap-24 pt-20">

                {/* LEFT SECTION */}
                <div>
                    <img
                        src="/src/assets/logo.png"
                        alt="Radial Code Logo"
                        className="w-[140px] h-auto mb-4"
                    />

                    <p className="text-gray-600 max-w-[280px] mb-6">
                        Pupilo is Africa’s most loved online coding platform for kids and
                        teens—where every child can code, create, and thrive.
                    </p>

                    <h4 className="font-semibold text-[14px] mb-3">
                        Subscribe to our Newsletter
                    </h4>

                    <div className="flex items-center bg-gray-100 rounded-full p-1 w-[260px]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 bg-transparent px-3 text-sm outline-none"
                        />

                        <button className="bg-yellow-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* RIGHT SECTION LINKS */}
                <div className="flex gap-16">

                    {FOOTER_LINKS.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-4">{section.title}</h3>

                            <ul className="space-y-3 text-gray-600">
                                {section.links.map((link, i) => (
                                    <li
                                        key={i}
                                        className="cursor-pointer hover:text-black transition"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>

                        <ul className="space-y-3 text-gray-600">
                            {CONTACT_INFO.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
                

            </div>
        </footer>
    );
};

export default Footer;