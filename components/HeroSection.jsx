import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {

    return (
        <main className="py-16 mt-16 md:flex md:shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                    <h1 className="font-extrabold">
                        <span className="text-white text-8xl">
                            Hello, I'm{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-red-700 via-red-800 to-red-900">
                                Freddy Fazbear
                            </span>
                        </span>
                        <span className="text-7xl">
                            <TypeWritter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(`<span style="color:#666666" >Oh Cholera Czy To Freddy Fazbear</span>`)
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString(`<span style="color:#666666" >Uhr Uhr Uhr</span>`)
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start();
                                }}
                            ></TypeWritter>
                        </span>
                        <p className="text-sky-100 mt-8 text-base sm:text-lg md:text-xl mb-6">Slide down to know more about me!</p>
                        <Link
                            href="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/df867784441d46a9a4e68bf3404265a5_1699730730~tplv-photomode-video-cover:480:480.jpeg?x-expires=1702098000&x-signature=DHF%2BdndRAhd6xsOi%2BWnXhRoXg%2Bc%3D"
                            target="_blank" //Open in new tab
                            className="px-6 inline-block py-3 rounded-full border-2 border-pink-500 hover:bg-pink-400">
                        View my resume
                        </Link>
                    </h1>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <div className="w-[400px] h-[400px] relative z-0">
                        <img
                        src="/fazbear.jpg"
                        alt="hero section"
                        className="transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        >
                        </img>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;