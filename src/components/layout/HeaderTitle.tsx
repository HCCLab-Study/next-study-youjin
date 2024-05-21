import Title from "@/constants/Title";
import { useMediaQuery } from "react-responsive";

export default function HeaderTitle() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isTablet = useMediaQuery({ query: '(min-width:768px) and (max-width:1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width:767px)' });

    return (
        <div className={`${isMobile} ? ml-16 : ' '`}>
            
        </div>
    );
};