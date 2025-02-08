import React from 'react'

export default function Search() {
    return (
        <form className="mx-auto bg-white p-4 rounded-md shadow-md space-y-4">
            <h2 className="text-xl font-bold text-start">البحث</h2>

            {/* Location Dropdown */}
            <select className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none">
                <option >جميع الأماكن</option>
                <option >الرياض / السعودية</option>
                <option >الاحساء / السعودية</option>
                <option >مكة المكرمة / السعودية</option>
                <option >أبها / السعودية</option>
            </select>


            {/* Search Input */}
            <input
                type="text"
                placeholder="ابحث..."
                className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none"
            />

            {/* Month & Year Selection */}
            <div className="flex gap-2">
                <select className="flex-1 p-3 border rounded-md bg-gray-100 focus:outline-none">
                    <option>جميع الشهور</option>
                    <option>يناير </option>
                    <option>فبراير </option>
                    <option>مارس </option>
                    <option>ابريل </option>
                    <option>مايو </option>
                    <option>يونيو </option>
                </select>
                <select className="w-1/3 p-3 border rounded-md bg-gray-100 focus:outline-none">
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                </select>
            </div>

            {/* Date Range */}
            <h3 className="text-md font-semibold text-center">التاريخ</h3>
            <div className="flex flex-col gap-2">
                <div className='flex gap-2 items-center'>
                    <span>من</span>
                    <input
                        type="date"
                        placeholder="من"
                        className="flex-1 p-3 border rounded-md bg-gray-100 focus:outline-none"
                    />
                </div>
                <div className='flex gap-2 items-center'>
                    <span>إلى</span>
                    <input
                        type="date"
                        placeholder="إلى"
                        className="flex-1 p-3 border rounded-md bg-gray-100 focus:outline-none"
                    />
                </div>
            </div>

            {/* Other Information Section */}
            <h3 className="text-md font-semibold text-center">معلومات اخرى</h3>
            <select className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none">
                <option>مواضيع التدريب</option>
                <option>الهندسة</option>
                <option>الشهادات الاحترافية</option>
            </select>
            <select className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none">
                <option>الموضوعات الفرعية</option>
            </select>
            <select className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none">
                <option>قائمة الاعتمادات</option>
            </select>

            {/* Submit Button */}
            <button className="w-full bg-secondary text-white p-3 rounded-md font-semibold hover:bg-red-800 transition">
                ابحث
            </button>
        </form>
    )
}
