import React from "react";
import Animations from "../utils/Animations";
import box1 from "../../assets/Box1.png";
import box2 from "../../assets/Box2.png";
import box3 from "../../assets/Box3.png";
import box4 from "../../assets/Box4.png";

const ThreeBoxes: React.FC = () => {
  // const BoxData = [
  //   {
  //     id: 1,
  //     title: "هدفون ها",
  //     subtitle: "تا 15% تخفیف",
  //     image: ps5,
  //   },
  //   {
  //     id: 2,
  //     title: "کامپیوتر ها",
  //     subtitle: "تا 15% تخفیف",
  //     image: ps5,
  //   },
  //   {
  //     id: 3,
  //     title: "گجت ها ها",
  //     subtitle: "تا 15% تخفیف",
  //     image: ps5,
  //   },
  // ];
  const BoxData = [
    {
      id: 1,
      image: box1,
    },
    {
      id: 2,
      image: box2,
    },
    {
      id: 3,
      image: box3,
    },
    {
      id: 4,
      image: box4,
    },
  ];
  //? OLD MOTION
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const OpacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  //! NEW MOTION
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const mainControls = useAnimation();
  // useEffect(() => {
  //   console.log(isInView , "in");
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);
  return (
    <>
      <Animations>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
          {BoxData.map((data) => (
            <img
              key={data.id}
              className="w-full h-full rounded-lg"
              src={data.image}
              alt=""
            />
          ))}
        </div>
      </Animations>
    </>
  );
};

export default ThreeBoxes;

{
  /* <div
            key={data.id}
            className="w-full h-[25vh] bg-[#062348] rounded-lg p-5 flex items-center justify-between"
          >
            <div className="flex flex-col items-start justify-evenly h-full text-white">
              <h5 className="font-bold text-2xl">{data.title}</h5>
              <span>{data.subtitle}</span>
            </div>
            <div className="">
              <img className="w-40 h-40" src={data.image} alt="" />
            </div>
          </div> */
}
