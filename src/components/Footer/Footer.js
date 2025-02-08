import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="bg-main text-white py-8 bottom-0">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-8 text-right">


                    {/* \ القسم الأول - الأكثر طلبًا */}
                    <div className="md:col-span-2">
                        <h2 className="text-lg font-bold mb-4">الدورات الأكثر طلبًا</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <div className="flex items-center gap-x-2">
                                    <div>
                                        <a href="https://ivorytraining.com/course/details/183">
                                            <img src="https://ivorytraining.com/courses/Y6Lm16rM9gvzCFxsao82iknwL39shBcbZYOd5ZVc.png" className="flex-shrink-0 rounded-md border-whiteCustom w-[60px] h-[40px]" alt="..."></img>
                                        </a>
                                    </div>
                                    <div>
                                        <p>
                                            <a href="https://ivorytraining.com/course/details/183">
                                                المهارات العملية لإدارة المبيعات
                                            </a>
                                        </p>
                                    </div>
                                </div></li>
                            <li><div className="flex items-center gap-x-2">
                                <div>
                                    <a href="https://ivorytraining.com/course/details/242">
                                        <img src="https://ivorytraining.com/courses/GGtloWKmheud2DzYyf6owz7IaakHKx9lmuXZm6FE.png" className="rounded-md border-whiteCustom w-[60px] h-[40px]" alt="..."></img>
                                    </a>
                                </div>
                                <div>
                                    <p>
                                        <a href="https://ivorytraining.com/course/details/242">
                                            شريك محترف في إدارة الموارد البشرية aPHRi
                                        </a>
                                    </p>
                                </div>
                            </div></li>
                            <li><div className="flex items-center gap-x-2">
                                <div>
                                    <a href="https://ivorytraining.com/course/details/2133">
                                        <img src="https://ivorytraining.com/courses/2V8H6BLlM6SxvrEG2eQeG8MOU0CAsqn3q49korWl.png" className="rounded-md border-whiteCustom w-[60px] h-[40px]" alt="..."></img>
                                    </a>
                                </div>
                                <div>
                                    <p>
                                        <a href="https://ivorytraining.com/course/details/2133">
                                            تصميم خطة التدريب للشركات (رفع كفاءة الأعمال بالتدريب )
                                        </a>
                                    </p>
                                </div>
                            </div></li>
                            <li><div className="flex items-center gap-x-2">
                                <div>
                                    <a href="https://ivorytraining.com/course/details/229">
                                        <img src="https://ivorytraining.com/courses/3D0zgauGuvYYF4LAIKMPXZQ85tpPEi9tBQ4jan07.png" className="rounded-md border-whiteCustom bg-whiteCustom w-[60px] h-[40px]" alt="..."></img>
                                    </a>
                                </div>
                                <div className="w-3/4">
                                    <p>
                                        <a href="https://ivorytraining.com/course/details/229">
                                            محترف وممارس معتمد في مؤشرات الأداء الرئيسية (C-KPIs) - Certified KPI Professional and Practitioner
                                        </a>
                                    </p>
                                </div>
                            </div></li>

                        </ul>
                    </div>

                    {/*  القسم الثاني - الروابط */}
                    <div className="col-span-1">
                        <h2 className="text-lg font-bold mb-4">روابط تهمك</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">التحقق من الشهادات</a></li>
                            <li><a href="#" className="hover:underline">سياسة الخصوصية</a></li>
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-white text-[#7E1223] rounded-md text-sm font-bold">
                            اطلب دورتك التعاقدية
                        </button>
                    </div>

                    {/*  القسم الثالث - اتصل بنا */}
                    <div className="col-span-1">
                        <h2 className="text-lg font-bold mb-4">ابق على اتصال</h2>
                        <p className="text-sm">الرياض، المرسلات طريق أبو بكر الصديق</p>
                        <p className="text-sm">الإمارات العربية المتحدة - دبي</p>
                        <p className="text-sm">جمهورية مصر العربية - القاهرة</p>
                        <p className="text-sm mt-2 font-bold">00966533993220</p>

                        {/* ✅ أيقونات السوشيال ميديا */}
                        <div className="flex gap-x-3 mt-4 text-lg">
                            <a href="#" className="hover:text-gray-300"><FaSnapchatGhost /></a>
                            <a href="#" className="hover:text-gray-300"><FaTiktok /></a>
                            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
                        </div>



                    </div>
                    <div className="logo col-span-1">
                        <a href="https://ivorytraining.com">
                            <img src="https://ivorytraining.com/assets/site/images/logofoot.png" alt="Ivory Training" className="h-12" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
