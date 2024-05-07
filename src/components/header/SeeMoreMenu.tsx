import { useEffect, useState } from "react";
import { MenuItem } from "./_components/MenuItem";
import SubMenu from "./SubMenu";

type Props = {
    subMenuItems: MenuItem[];
};

export default function SeeMoreMenu({ subMenuItems }: Props) {
    const [active, setActive] = useState(false);

    const onActiveMenu = () => {
        setActive(!active);
    };


    return (
        <>
            <li className="flex relative" onClick={onActiveMenu}>
                <p>더보기</p>
                {active && <SubMenu menuItems={subMenuItems} />}
            </li>
        </>
    );
};