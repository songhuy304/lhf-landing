"use client";

import { FacebookIcon, HotPepperIcon, LineIcon } from "@/components/ui/icon";
import { ContactInfo } from "@/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface FloatingSocialButtonsProps {
  className?: string;
}

export const FloatingSocialButtons = ({
  className = "",
}: FloatingSocialButtonsProps) => {
  const pathname = usePathname();
  const [isNailPage, setIsNailPage] = useState(false);

  useEffect(() => {
    // Memoize the check to avoid unnecessary re-renders
    const isNail = pathname.includes("/nail");
    if (isNail !== isNailPage) {
      setIsNailPage(isNail);
    }
  }, [pathname, isNailPage]);

  return (
    <div
      className={`fixed bottom-8 right-5 z-50 flex flex-col gap-2 ${className}`}
    >
      {/* Điện thoại - hiển thị trên tất cả các trang */}
      <a
        href={`tel:${ContactInfo.phone}`}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
        aria-label="Gọi điện"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>

      {/* Các nút mạng xã hội chỉ hiển thị trên trang nail */}
      {isNailPage && (
        <>
          <a
            href={ContactInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon size={24} />
          </a>
          <a
            href={ContactInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
            aria-label="Line"
          >
            <LineIcon size={24} className="fill-white" />
          </a>
          <a
            href={ContactInfo.hotpepperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/200 shadow-lg transition-colors bg-[#9f1547]"
            aria-label="Instagram"
          >
            <HotPepperIcon size={24} />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
            </svg>
          </a>
        </>
      )}
    </div>
  );
};
