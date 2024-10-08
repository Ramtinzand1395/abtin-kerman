import React, { useEffect, useState } from "react";
import Animations from "../utils/Animations";
import LeftAnimation from "../utils/LeftAnimation";
import { GameData } from "../../types";
import { getGameService } from "../../services/ApiServices";
import AccountsGames from "../utils/AccountsGames";

interface Newestprops {
  title: string;
}
const Newest: React.FC<Newestprops> = ({ title }) => {
  const [Games, setGames] = useState<GameData[]>([]);
  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await getGameService();
        setGames(data);
      } catch (err) {
        console.log(err);
      }
    };
    getGames();
  }, []);
  return (
    <div>
      <Animations>
        <h2 className="font-bold text-lg lg:text-2xl mt-10 mb-2">{title}</h2>{" "}
      </Animations>
      <div className="w-full h-[8px] rounded-3xl border-2 border-gray-500"></div>{" "}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 my-10 ">
        {Games.map((game) => (
          <LeftAnimation key={game._id}>
            <AccountsGames
              // info={game}
              primaryImage={game.primaryImage}
              additionalImages={game.additionalImages}
              title={game.title}
              info={game.info}
              _id={game._id}
              // OpenTag={game.OpenTags}
              // OpenDiscount={game.OpenDiscount}
              // discount={game.discount}
              // image={game.image}
              // description={card.description}
            />
          </LeftAnimation>
        ))}
      </div>
    </div>
  );
};

export default Newest;
