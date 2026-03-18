import { FOOTER_LINKS, CONTACT_ICONS, SOCIAL_ICONS } from "../../utils/helper";
import Button from "./Button";
import Icons from "./Icons";
const Footer = () => {
    return (
        <footer className="w-full bg-[#F8F8F8]">
            <div className="max-w-285 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 pt-12 lg:pt-20 px-4">
                <div className="max-w-[300px]">
                    <img
                        src="/assets/images/png/logo.png"
                        alt="Radial Code Logo"
                        className="w-[140px] h-auto mb-4"
                    />
                    <p className=" font-normal text-[14px] leading-[150%] tracking-normal text-gray-600 mb-6">
                        Pupilo is Africa’s most loved online coding platform for kids and
                        teens—where every child can code, create, and thrive.
                    </p>
                    <h3 className="font-semibold text-[14px] mb-3">
                        Subscribe to our Newsletter
                    </h3>

                    <div className="flex items-center bg-gray-100 rounded-full p-full w-full max-w-[260px]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 bg-transparent px-3 text-sm outline-none"
                        />
                        <Button
                            text={"Subscribe"}
                            className="bg-yellow-400 px-8 py-3 rounded-full text-sm font-medium hover:bg-yellow-500 transition"
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16">

                    <div className="lg:flex-row flex sm:flex-col ">
                        {FOOTER_LINKS.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-[13px] sm:text-[16px] mb-4">
                                    {section.title}
                                </h3>

                                <ul className="space-y-3 text-gray-600">
                                    {section.links.map((link, i) => (
                                        <li
                                            key={i}
                                            className="cursor-pointer hover:text-black transition text-[14px] sm:text-[16px]">
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-600 mb-6">
                            {CONTACT_ICONS.map((item, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer hover:text-black flex items-center gap-2"
                                >
                                    <Icons icon={item.icon} />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <h4 className="font-semibold mb-3">Follow Us</h4>
                        <div className="flex gap-2 mt-3">
                            {SOCIAL_ICONS.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className=""
                                >
                                    <Icons icon={item.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-12">
                <div className="max-w-285 mx-auto py-6 text-center text-gray-500 text-sm">
                    Copyright © 2025 Pupilo. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;
