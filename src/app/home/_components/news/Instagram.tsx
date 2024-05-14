import React from 'react';
import Image from 'next/image';
export default function InstagramNews() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-start">
                <p className="mt-12 mb-4">더 많은 소식과 근황 보기:{" "}
                    <a href="https://www.instagram.com/kw.idea.lab" target="_blank" className="text-custom-blue font-semibold underline">instagram</a>
                </p>
                <div className="relative w-full max-w-[1000px] h-auto">  
                <Image src="/assets/image/instagram.webp" alt="idealab 인스타그램" width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
};
