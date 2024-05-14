import { MenuItem } from "@/constants/MenuItem";
import Link from "next/link";

type Props = {
    menuItems: MenuItem[];
    selectedItem: string | null;
    setSelectedItem: (name: string) => void;
};

export default function SeeMoreBar({ menuItems, selectedItem, setSelectedItem }: Props) {
    return (
        <div className="submenu-container open border-2 border-black absolute top-8 -left-[85px] w-[180px] px-8 py-8 rounded-sm bg-white text-black">
            <ul className="flex flex-col">
                {menuItems.map((item, index) => (
                    <li key={index} 
                        className={`cursor-pointer ${selectedItem === item.name ? 'bg-gray-400' : 'bg-transparent'} p-2`}
                        onClick={() => setSelectedItem(item.name)}>
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
