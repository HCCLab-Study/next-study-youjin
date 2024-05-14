import React, { useState } from 'react';
import { useHeaderSize } from '@/hooks/useDeviceSize';
import { MenuItem } from '@/constants/MenuItem';
import Link from "next/link";
import SeeMoreMenu from "./SeeMoreMenu";
import SearchIcon from './_icons/SearchIcon';

type Props = {
    selectedItem: string | null;
    setSelectedItem: (item: string | null) => void;
};

export default function NavBar({ selectedItem, setSelectedItem }: Props) {
    const { showNumber, isShowHamburgerMenu } = useHeaderSize();
    const [isScrolled, setIsScrolled] = useState(false);
    const iconColor = isScrolled ? "black" : "white";

    const visibleItems = MenuItem.slice(0, showNumber);
    const subMenuItems = MenuItem.slice(showNumber);

    return (
        <main className="mb-2.5">
            <div className="flex flex-1 justify-end mr-3">
                <nav className={`p-3 flex justify-center items-end ${isShowHamburgerMenu ? 'pr-10' : ''}`}>
                    <ul className="flex gap-4">
                        {visibleItems.map((item, index) => (
                            <li key={index}
                                className={`cursor-pointer ${selectedItem === item.name ? 'bg-gray-400' : 'bg-transparent'}`}
                                onClick={() => setSelectedItem(item.name)}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                        {!isShowHamburgerMenu && subMenuItems.length > 0 && <SeeMoreMenu subMenuItems={subMenuItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
                    </ul>
                </nav>
                <div className="mt-2.5">
                    <SearchIcon color={iconColor} />
                </div>
            </div>
        </main>
    );
};
