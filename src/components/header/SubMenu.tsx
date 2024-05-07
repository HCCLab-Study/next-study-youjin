import Link from "next/link";
import { MenuItem } from "./_components/MenuItem";
import { useState } from "react";

type Props = {
    menuItems: MenuItem[];
};

export default function SubMenu({ menuItems }: Props) {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className="border-2 border-black absolute top-8 -left-[80px] w-[180px] px-8 py-8 rounded-sm bg-white text-black">
            <ul className="flex flex-col">
                {menuItems.map((item, index) => (
                    <li key={index} className={`cursor-pointer ${selectedItem === item.name ? 'bg-gray-400' : 'bg-transparent'} p-2`}
                        onClick={() => setSelectedItem(item.name)}>
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}