import { useState } from "react";
import { MenuItem } from "@/constants/MenuItem";
import SeeMoreBar from "./SeeMoreBar";

type Props = {
    subMenuItems: MenuItem[];
    selectedItem: string | null;
    setSelectedItem: (item: string | null) => void;
};
export default function SeeMoreMenu({ subMenuItems, selectedItem, setSelectedItem }: Props) {
    const [active, setActive] = useState(false);


    const onActiveMenu = () => {
        setActive(!active);
    };


    return (
        <>
            <li className="flex relative" onClick={onActiveMenu}>
                <p className="cursor-pointer">더보기</p>
                {active && (
                    <SeeMoreBar
                        menuItems={subMenuItems}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                )}
            </li>
        </>
    );
};