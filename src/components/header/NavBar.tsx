import Link from "next/link";
import { MenuItem } from "./_components/MenuItem";
import { useState } from 'react';

export default function NavBar() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <main className="w-[65vw]">
            <nav className="p-3 mt-3 flex justify-end items-center">
                <ul className="flex gap-6">
                    {MenuItem.map((item) => (
                        <li key={item.name}
                            className={`cursor-pointer ${selectedItem === item.name ? 'bg-gray-400' : 'bg-transparent'} text-inherit`}
                            onClick={() => setSelectedItem(item.name)}>
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </main>
    );
};
