import React from "react";
import HoverCard from "../../utils/HoverCard";
import hover1 from "../../../assets/Hover/Fc-Hover.webp";
import hover2 from "../../../assets/Hover/FC_correct.webp";
import hover3 from "../../../assets/Hover/GodOfWar_Hover.webp";
import hover4 from "../../../assets/Hover/GodOfWar-Correct.webp";
import hover5 from "../../../assets/Hover/Spider-man_Hover.webp";
import hover6 from "../../../assets/Hover/Spider-man.webp";
import hover7 from "../../../assets/Hover/Wukong_hover.webp";
import hover8 from "../../../assets/Hover/Wukong_Correct.webp";
import LeftAnimation from "../../utils/LeftAnimation";

const MostSell: React.FC = () => {
  const hovercars = [
    {
      id: 1,
      title: "Fc",
      image1: hover2,
      image2: hover1,
    },
    {
      id: 2,
      title: " GodOfWar",
      image1: hover4,
      image2: hover3,
    },
    {
      id: 3,
      title: "Spider-man",
      image1: hover6,
      image2: hover5,
    },
    {
      id: 4,
      title: "Wukong",
      image1: hover8,
      image2: hover7,
    },
  ];
  return (
    <div>
      {/* <Animations>
        <div className="flex items-center mt-10 mb-2">
          <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap ml-5">
            بازی های پر فروش
          </h2>{" "}
          </div>
          </Animations> */}
      <div className="w-full h-[8px] rounded-3xl bg-primary"></div>{" "}
      <LeftAnimation>
        <div className="my-5">

        <h3 className="font-tanha text-primary my-4">
          خوش آمدید به کرمان آتاری
        </h3>
        <p>
          در "کرمان آتاری"، تجربه‌ای منحصربه‌فرد از خرید و فروش بازی‌های
          پلی‌استیشن و کنسول‌های سونی را برای شما فراهم کرده‌ایم. هدف ما ارائه
          محصولات با کیفیت بالا، قیمت مناسب، و گارانتی معتبر است تا هر مشتری با
          خیالی آسوده از ما خرید کند.
        </p>
        </div>
        <div className="">
        <h3 className="font-tanha text-primary my-4">
          درباره ما

          </h3>
        <p>
          درباره ما کرمان آتاری با بیش از نیم‌قرن سابقه (از سال 1340) در زمینه
          خرید و فروش بازی‌های اکانتی و دستگاه‌های پلی‌استیشن فعالیت می‌کند. ما
          مفتخریم که همواره به رضایت مشتریان، سرعت در ارائه خدمات، و کیفیت برتر
          محصولات خود متعهد بوده‌ایم.
        </p>
        </div>
        <div className="">
        <h3 className="font-tanha text-primary my-4">
          چرا کرمان آتاری؟

          </h3>
          <p>
          کیفیت بالا: تمامی محصولات ما اصل و با گارانتی معتبر ارائه می‌شوند.
سرعت و قیمت مناسب: خریدی آسان و سریع همراه با قیمتی رقابتی.
پشتیبانی دوستانه: تیم ما همواره آماده پاسخ‌گویی به سوالات شماست.

          </p>
        </div>
      </LeftAnimation>
      <LeftAnimation>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-10 ">
          {hovercars?.map((card) => (
            <HoverCard key={card.id} card={card} />
          ))}
        </div>
      </LeftAnimation>
    </div>
  );
};

export default MostSell;
