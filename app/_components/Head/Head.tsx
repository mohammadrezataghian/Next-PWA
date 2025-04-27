import React from "react";
import Link from "next/link";
import Logo from "@/public/icons/icon-512x512.png";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import BasicMenu from "./_components/Menu";

const Head = () => {
  
  return (
    <>
      <header className="w-full h-auto sticky top-0 z-50">
        <nav className="w-full h-auto p-3 bg-white boxShadowHead flex justify-between items-center">
          <div className="md:hidden block">
            <BasicMenu />
          </div>
          <div className="md:block hidden">
            <Link href="#">Login / SignUp</Link>
          </div>
          <div className="">
            <Link href="#" className="flex gap-1 items-center">
              <span>
                <SearchIcon className="text-sm" />
              </span>
              <span>Search</span>
            </Link>
          </div>
          <div className="border rounded-[50%] p-2">
            <Link href="#">
              <Image src={Logo} alt="logo" className="w-10 h-10" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Head;
