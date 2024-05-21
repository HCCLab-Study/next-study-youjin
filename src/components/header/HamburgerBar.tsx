import { MenuItem } from "@/constants/MenuItem";
import Link from "next/link";

type Props = {
    menuItems: MenuItem[];
};

export default function HamburgerBar({ menuItems }: Props) {

    return (
        <div className="submenu-container open fixed left-0 top-0 w-64 min-h-screen bg-white transition-transform duration-300 ease-in-out">
            <button className="text-black text-2xl p-3">x</button>
            {menuItems && menuItems.map((item, index) => (
                <div key={index} className="submenu-item p-4 hover:bg-gray-400">
                    <Link href={item.href} className="text-black">{item.name}</Link>
                </div>
            ))}
        </div>
    )
}