"use client";
import { useScroll } from "@/hooks/useScroll";
import HeaderIcon from "./HeaderIcon";
import NavBar from "./NavBar";
import Image from "next/image";
import headerBackground from "../../assets/image/header-background.png";
import Title from "./_components/Title";

export default function Header() {
    const isScroll = useScroll();

    return (
        <div className="relative w-full">
            <Image src={headerBackground} alt="배경화면" layout="responsive" width={1700} height={240} />
            <div className="absolute top-0 left-0 right-0">
                <header className={`w-full flex justify-between items-center fixed z-20 ${isScroll ? 'bg-white text-black' : 'bg-transparent text-white'} transition-colors ease-in-out`}>
                    <HeaderIcon />
                    <NavBar />
                </header>
                <Title />
            </div>
        </div>
    );
};
