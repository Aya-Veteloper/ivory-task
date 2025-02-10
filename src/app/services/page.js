'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const trainingFields = [
    {
        title: "إدارة الثروة والاستثمار",
        categories: ["التمويل", "الأسواق المالية", "الاستثمار المؤسسي", "الدخول والاستثمار", "سوق المال"],
        image: "/images/investment.jpg"
    },
    {
        title: "التطوير التنظيمي",
        categories: ["التخطيط والتنظيم", "إدارة المشاريع", "إعادة الهيكلة", "التغيير المؤسسي"],
        image: "/images/organizational_dev.jpg"
    },
    {
        title: "تطوير الذات التشغيل",
        categories: ["إدارة عمليات التشغيل", "إدارة الموارد والمشتريات", "إدارة المعلومات والتوقعات", "الجودة والامتثال"],
        image: "/images/self_dev.jpg"
    },
    {
        title: "التطوير الشخصي",
        categories: ["إدارة الذات", "التأثير والإقناع", "مهارات التفكير", "الإبداع"],
        image: "/images/personal_dev.jpg"
    },
    {
        title: "الإتصال التجاري",
        categories: ["التسويق", "المبيعات", "الإعلانات والسمعة", "الإدارة الرقمية وإدارة المحتوى"],
        image: "/images/business_communication.jpg"
    },
    {
        title: "إدارة المشتريات وسلاسل المشتريات",
        categories: ["التوريد", "إدارة المخزون والمستودعات", "التوزيع والخدمات اللوجستية", "إدارة العقود"],
        image: "/images/supply_chain.png"
    }
];

const services = [
    { id: 1, title: "الهواتف الفيديوهات" },
    { id: 2, title: "مركز البيانات" },
    { id: 3, title: "الاتصالات الخلوية" },
    { id: 4, title: "برامج أمن المعلومات" },
];

const sections = [
    {
        title: "إدارة الرعاية الطبية",
        items: [
            "القيادة والمسؤولية: تعزيز القيادة الفعالة وتحمل المسؤولية في إدارة الرعاية الصحية.",
            "الإدارة والتشغيل: تحسين العمليات التشغيلية لضمان كفاءة الخدمات الطبية.",
            "الرعاية الطبية: توفير رعاية صحية عالية الجودة للمرضى.",
            "الجودة والامتثال: ضمان الامتثال للمعايير الطبية وتحسين جودة الخدمات.",
        ],
    },
    {
        title: "إدارة الخدمات التعليمية",
        items: [
            "الجودة والتقييم المؤسسي: تطوير معايير الجودة في المؤسسات التعليمية.",
            "إدارة المكاتب والبيانات: تحسين إدارة البيانات والمعلومات في المؤسسات التعليمية.",
            "التطوير المهني: تقديم برامج تدريبية لتحسين مهارات العاملين في القطاع التعليمي.",
            "التخطيط الاستراتيجي: وضع خطط استراتيجية لتحقيق الأهداف التعليمية.",
        ],
    },
    {
        title: "إدارة الموارد البشرية",
        items: [
            "التوظيف والاختيار: تطوير استراتيجيات فعالة لتوظيف الكفاءات.",
            "التدريب والتطوير: تقديم برامج تدريبية لتحسين مهارات الموظفين.",
            "إدارة الأداء: تقييم أداء الموظفين وتقديم التغذية الراجعة.",
            "الرواتب والمزايا: إدارة أنظمة الرواتب والمزايا لضمان العدالة والشفافية.",
        ],
    },
    {
        title: "إدارة المشاريع",
        items: [
            "تخطيط المشاريع: وضع خطط تفصيلية لإدارة المشاريع بكفاءة.",
            "إدارة المخاطر: تحديد وإدارة المخاطر المحتملة في المشاريع.",
            "مراقبة الجودة: ضمان جودة المخرجات وفقًا للمعايير المحددة.",
            "إغلاق المشاريع: إتمام المشاريع وتقييم النتائج.",
        ],
    },
];

export default function page() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };




    return (
        <>
            <section className="training-landing">
                <div className="overlay">
                    <div className="flex justify-center">
                        <div className="w-[60%] text-whiteCustom pb-[20px]">
                            <p className="text-2xl py-[20px] text-center font-bold mb-[20px]">التدريب</p>
                            <p className="text-lg text-justify">
                                فـي عصـرِ النهضـة التكنولوجيـة تقـدم آيفورى حقيبـة تدريبيـة ذات موضوعـات تفاعلية ومؤثـرة، تـم إعدادهـا على نحِو إسـتراتيجي لتلائم طبيعـة التحديـات التـي يواجههـا العالـم فـي الفتـرة الحاليـة. نهـدف مـن تلـك الموضوعـات التدريبيـة سـد الفجـوة ومعالجـة نقــاط
                                الضعــف لــدى الأفــراد والعمــل علــى تنميــة مواهبهــم وتوســيع مداركهــم وتعزيــز مهاراتهــم بشــكل ملائم لســوق العمــل.
                            </p>
                            <p className="text-lg text-justify">
                                عـلاوة علـى تحسـين أداء المؤسسـات والشـركات بهـدف الوصـول بهـم نحـو أعلـى معـدلات النمـو والإزدهـار. ويندرج تحت كل موضوع تدريبي عدة برامج مختصة بالتدريب والتأهيل والتوجية بالإضافة إلى البرامج الإستشارية.
                            </p>


                        </div>
                    </div>
                </div>
            </section>
            <section className="p-10 bg-gray-100">
                <h2 className="text-main text-3xl font-bold text-center mb-8">مجالات التدريب والتطوير</h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {trainingFields.map((field, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Image src={field.image} alt={field.title} width={400} height={160} className="w-full h-40 object-cover" />
                            <div className="py-5 px-10 text-main">
                                <h3 className="text-xl font-semibold mb-3">{field.title}</h3>
                                <ul className="list-disc pl-5">
                                    {field.categories.map((category, i) => (
                                        <li key={i}>{category}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="relative bg-main py-12 text-whiteCustom text-center">
                <h2 className="text-3xl font-bold mb-8">تقنية المعلومات والتحول الرقمي</h2>
                <div className="container flex flex-wrap justify-center gap-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="bg-white text-main rounded-2xl p-6 w-64 text-lg font-semibold flex items-center justify-center shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: service.id * 0.2 }}
                        >
                            {service.title}
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className="relative bg-white text-main p-12 flex justify-center flex-col">
                <h1 className="text-3xl font-bold mb-6 text-center">الأقسام</h1>

                {sections.map((section, index) => (
                    <div key={index} className="mb-4 text-main">
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full text-xl font-semibold text-gray-700 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 focus:bg-main focus:text-white"
                        >
                            {section.title}
                        </button>
                        {openSection === index && (
                            <ul className="mt-2 pr-10 space-y-2 text-main">
                                {section.items.map((item, i) => (
                                    <li key={i} className="list-disc">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

        </>
    )
}