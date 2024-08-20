import React from "react";
import ps5 from "../../assets/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20-800x800.png";
import Animations from "../utils/Animations";

const ThreeBoxes: React.FC = () => {
  const BoxData = [
    {
      id: 1,
      title: "هدفون ها",
      subtitle: "تا 15% تخفیف",
      image: ps5,
    },
    {
      id: 2,
      title: "کامپیوتر ها",
      subtitle: "تا 15% تخفیف",
      image: ps5,
    },
    {
      id: 3,
      title: "گجت ها ها",
      subtitle: "تا 15% تخفیف",
      image: ps5,
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
      {BoxData.map((data) => (
        <Animations>
          <div
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
          </div>
        </Animations>
      ))}
    </>
  );
};

export default ThreeBoxes;
