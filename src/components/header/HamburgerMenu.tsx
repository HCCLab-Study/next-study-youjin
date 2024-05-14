"use client";

import { MenuItem } from "@/constants/MenuItem";
import { useHeaderSize } from "@/hooks/useDeviceSize";
import Hamburger from "hamburger-react";
import { useState } from "react";
import HamburgerBar from "./HamburgerBar";

type Props = {
    subMenuItems: MenuItem[];
};

export default function HamburgerMenu({ subMenuItems }: Props) {
    const { isShowHamburgerMenu } = useHeaderSize();
    const [isOpen, setIsOpen] = useState(false);

    const onClickMenu = () => {
        console.log(subMenuItems);
        setIsOpen(!isOpen);
    }

    if (!isShowHamburgerMenu) return null;

    return (
        <div
            className="w-10 h-10 flex justify-start items-start cursor-pointer mb-4"
            onClick={onClickMenu}>
            <div className="z-[60]">
                <button className="flex justify-start items-start w-full h-full" onClick={onClickMenu}>
                    <Hamburger size={20} toggled={isOpen} color="white" />
                </button>
                {isOpen && <HamburgerBar menuItems={subMenuItems} />}
            </div>
        </div>

    );
};
