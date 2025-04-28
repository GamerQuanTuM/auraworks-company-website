import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { href: "/quotation", text: "다글견적소" },
    { href: "/portfolio", text: "포트폴리오" },
    { href: "/blog/category/interview", text: "성공사례" },
    { href: "/outsourcing", text: "아웃소싱" },
  ];
  return (
    <header className="w-full z-[2000] fixed top-0 left-0 right-0 backdrop-blur-[6px] text-white py-2">
      <div className="main-container flex items-center justify-between">
        <div className="flex items-center my-6 md:my-9 space-x-12">
          <Link href="/">
            <Image
              alt="Logo"
              width={100}
              height={20}
              className="md:w-[100px] md:h-[20px] w-[90px] h-[18px]"
              src="https://daggle.io/svg/logo/logo-light.svg"
              priority
            />
          </Link>
          <div className="ml-5 flex items-center justify-center gap-6">
            {navLinks.map((link, index) => (
              <Link href={link.href} key={index} className="cursor-pointer">
                <h1 className="text-lg font-semibold hover:text-gray-300 transition duration-300">
                  {link.text}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        {/* <Button className="bg-white text-xs hover:bg-gray-100 text-black font-semibold p-6">프로젝트 문의하기</Button> */}
        <Button className="inline-flex items-center justify-center cursor-pointer transition-colors text-black border bg-white border-line font-semibold px-7 py-6 rounded-lg">프로젝트 문의하기</Button>
      </div>
    </header>
  );
};

export default Navbar;
