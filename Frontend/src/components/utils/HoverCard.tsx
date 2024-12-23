import React from "react";
interface HoverCard {
  id: number;
  title: string;
  image1: string;
  image2: string;
}
interface HoverCardprops {
  card: HoverCard;
}
const HoverCard: React.FC<HoverCardprops> = ({ card }) => {
  return (
    <>
      <div className=" h-[50vh] md:h-[60vh]">
        <div>
          <div className="card">
            <div className="wrapper">
              <img
                width={"400px"}
                height={"400px"}
                title="cover-image"
                src={card.image1}
                className="cover-image rounded-2xl"
              />
            </div>
            {/* <p className="title text-center font-bold text-2xl text-white text-balance align-text-bottom">
              {card.title}
            </p> */}
            <img   width={"400px"}
        height={"400px"} title="character" src={card.image2} className="character " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverCard;
