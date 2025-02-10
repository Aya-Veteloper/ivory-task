"use client"

import { useState } from "react";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    return (
        <header className="relative h-auto bg-main text-white p-4 shadow-md">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center h-16">

                    {/* زر القائمة للجوال */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
                            {isOpen ? <IoClose /> : <IoMenu />}
                        </button>
                    </div>

                    {/* اللوجو */}
                    <div className="logo">
                        <a href="https://ivorytraining.com">
                            <img src="https://ivorytraining.com/assets/site/images/logofoot.png" alt="Ivory Training" className="h-12" />
                        </a>
                    </div>

                    {/* القائمة الرئيسية */}
                    <div className="hidden lg:flex gap-x-6 text-md items-center">
                        <a href="#" className="hover:text-gray-300">الرئيسية</a>

                        {/* قائمة الخدمات */}
                        <div className="relative">
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-gray-300 flex items-center gap-x-1">
                                <span>الخدمات</span>
                                <IoChevronDown className="text-lg" />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">التدريب</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">حلول التعلم المتكاملة</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">التقييمات</a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="hover:text-gray-300">الدورات التدريبية</a>
                        <a href="#" className="hover:text-gray-300">الخطة التدريبية</a>
                        <a href="#" className="hover:text-gray-300">الاعتمادات</a>

                        {/* قائمة الفعاليات */}
                        <div className="relative">
                            <button onClick={() => setDropdown(!dropdown)} className="hover:text-gray-300 flex items-center gap-x-1">
                                <span>الفعاليات</span>
                                <IoChevronDown className="text-lg" />
                            </button>

                            {dropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">المحاضرات والندوات</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">ATD</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Opex</a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="hover:text-gray-300">بودكاست</a>
                        <a href="#" className="hover:text-gray-300">اتصل بنا</a>
                    </div>

                    {/* أزرار اللغة */}
                    <div className="hidden sm:flex gap-x-3">
                        <button className="border rounded-xl border-white px-4 py-2 flex items-center gap-x-2">
                            <span>الملف التعريفي</span>
                        </button>
                        <button className="border rounded-xl border-white px-4 py-2 flex items-center gap-x-2">
                            <span>Profile</span>
                        </button>
                    </div>
                </nav>

                {/* قائمة الجوال (Mobile Menu) */}
                <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}>
                    <div className="w-64 bg-main h-full p-5 text-right transform transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}>
                        <button onClick={() => setIsOpen(false)} className="text-white text-2xl absolute top-4 right-4">
                            <IoClose />
                        </button>

                        <nav className="mt-10">
                            <a href="#" className="block py-2 hover:text-gray-300">الرئيسية</a>

                            {/* قائمة الخدمات */}
                            <div className="relative">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-gray-300 flex items-center gap-x-1">
                                    <span>الخدمات</span>
                                    <IoChevronDown className="text-lg" />
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">التدريب</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">حلول التعلم المتكاملة</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">التقييمات</a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block py-2 hover:text-gray-300">الدورات التدريبية</a>
                            <a href="#" className="block py-2 hover:text-gray-300">الخطة التدريبية</a>
                            <a href="#" className="block py-2 hover:text-gray-300">الاعتمادات</a>

                            {/* قائمة الفعاليات */}
                            <div className="relative">
                                <button onClick={() => setDropdown(!dropdown)} className="hover:text-gray-300 flex items-center gap-x-1">
                                    <span>الفعاليات</span>
                                    <IoChevronDown className="text-lg" />
                                </button>

                                {dropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">المحاضرات والندوات</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">ATD</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Opex</a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block py-2 hover:text-gray-300">بودكاست</a>
                            <a href="#" className="block py-2 hover:text-gray-300">اتصل بنا</a>
                            {/* <a href="#" className="block py-2 hover:text-gray-300">الرئيسية</a>
                            <a href="#" className="block py-2 hover:text-gray-300">من نحن</a>
                            <a href="#" className="block py-2 hover:text-gray-300">الخدمات</a>
                            <a href="#" className="block py-2 hover:text-gray-300">اتصل بنا</a> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
