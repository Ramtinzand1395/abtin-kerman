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
        <div className="flex items-center mt-10 mb-2">
          <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap ml-5">
            {title}
          </h2>{" "}
          <div className="w-full h-[8px] rounded-3xl bg-primary"></div>{" "}
        </div>
      </Animations>
      <LeftAnimation>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 ">
          {Games.map((game) => (
            <AccountsGames
              primaryImage={game.primaryImage}
              additionalImages={game.additionalImages}
              title={game.title}
              info={game.info}
              _id={game._id}
              key={game._id}
            />
          ))}
        </div>
      </LeftAnimation>
    </div>
  );
};

export default Newest;
