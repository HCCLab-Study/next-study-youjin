"use client";
import Image from "next/image";
import Link from "next/link";
import kwLogo from '../../assets/image/kw-logo.png'

export default function HeaderIcon() {

    return (
        <Link href="/home">
            <div className="flex w-[30vw]">
                <span>
                    <Image src={kwLogo} className="p-3" alt="kw logo" width={160} height={56} />
                </span>
                <span className="text-2xl p-3 mt-1 font-oswald">IDEA Lab</span>
            </div>
        </Link>
    );
};