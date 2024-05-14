"use client";
import { useScroll } from "@/hooks/useScroll";
import HeaderIcon from "./_icons/HeaderIcon";
import NavBar from "./NavBar";
import Title from "@/constants/Title";
import BackgroundImage from "./_components/BackgroundImage";
import HamburgerMenu from "./HamburgerMenu";
import { MenuItem } from "@/constants/MenuItem";
import { useState } from "react";

export default function Header() {
    const isScroll = useScroll();
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className="relative w-full">
            <BackgroundImage />
            <div className="absolute top-0 left-0 right-0">
                <header className={`w-full flex justify-between items-center fixed z-20 ${isScroll ? 'bg-white text-black' : 'bg-transparent text-white'} transition-colors ease-in-out`}>
                    <HamburgerMenu subMenuItems={MenuItem} />
                    <HeaderIcon />
                    <NavBar selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem} />
                </header>
                <Title />
            </div>
        </div>
    );
};

