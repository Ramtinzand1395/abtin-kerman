import React from "react";
import logo from "../../assets/4062c9fc8b3a999778ed824b24631ab0.jpg";

const Footer = () => {
  return (
    <div className="bg-gray-700 grid grid-cols-6 gap-10 h-[60vh] p-10">
      <div className="col-span-3 text-white flex flex-col items-start justify-evenly">
        {" "}
        <div className="flex items-center text-2xl">
          <img src={logo} className="w-[5vw] h-[5vw] rounded-full" alt="Logo" />
          <h2 className="font-bold mr-2 text-white whitespace-nowrap">
            کرمان آتاری
          </h2>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <div className="w-32 h-[2px] bg-[#5cc1b9]"></div>
        <div className="flex flex-col">
          <span>شماره تماس: 12345</span>
          <span>ایمیل پشتیبانی: support@domain.ir</span>{" "}
          <span>شبکه های اجتماعی: SepandShop@</span>
        </div>
      </div>
      <div className="flex-col flex items-start justify-evenly text-white">
        <h3>نحوه سفارش</h3>
        <div className="w-32 h-[2px] bg-[#5cc1b9]"></div>

        <p>چطور سفارش بدم؟</p>
        <p>شرایط ارسال چطوره؟</p>
        <p>پرداخت هزینه</p>
        <p>چرا به شما اعتماد کنم؟</p>
        <p>ضمانت چه شرایطی داره؟</p>
        <p>آیا امکان عودت وجود داره؟</p>
      </div>
      <div className="flex-col flex items-start justify-evenly text-white">
        <h3>درباره کرمان آتاری</h3>
        <div className="w-32 h-[2px] bg-[#5cc1b9]"></div>
        <p> درباره ما</p>
        <p>تماس با ما</p>
        <p>روش های ارسال کالا</p>
        <p>سپند در شبکه های اجتماعی</p>
        <p>تبلیغات</p>
        <p>شرایط عودت کالا</p>
      </div>{" "}
      <div className="flex-col flex items-start justify-evenly text-white">
        <h3>اعتماد</h3>
        <div className="w-32 h-[2px] bg-[#5cc1b9]"></div>
        <p> نماد الکترونیکی</p>
        <p>ضمانت بازگشت وجه</p>
        <p>باشگاه مشتریان</p>
        <p>آدرس فروشگاه فیزیکی</p>
        <p>مورد آزمایشی</p>
        <p>مورد آزمایشی دو</p>
      </div>
    </div>
  );
};

export default Footer;
