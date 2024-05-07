import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function InstagramNews() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <p className="mt-12 mb-4">더 많은 소식과 근황 보기:{" "}
                    <Link href="https://www.instagram.com/kw.idea.lab" target="_blank" className="text-custom-blue font-semibold underline">instagram</Link>
                </p>
                <Image src="/assets/image/instagram.png" alt="idealab 인스타그램" width={1000} height={1000} layout="intrinsic" />
            </div>
        </div>
    )
};
