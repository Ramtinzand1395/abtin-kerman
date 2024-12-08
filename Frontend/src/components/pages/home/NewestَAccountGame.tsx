import React, { useEffect } from "react";
import Animations from "../../utils/Animations";
import LeftAnimation from "../../utils/LeftAnimation";
import AccountsGames from "../../utils/AccountsGames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { toast } from "react-toastify";
import { clearError, fetchGames } from "../../../features/game/gameSlice";
import Spiner from "../../utils/Spiner";
import { Link } from "react-router-dom";

const NewestAccountGame: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { games, loading, error } = useSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  useEffect(() => {
    dispatch(fetchGames({ pageNumber: 1, orderDesc: "newestFirst" }));
  }, [dispatch]);

  if (loading) return <Spiner />;

  return (
    <div>
      <Animations>
        <div className="flex items-center mغ-10 mb-2">
          <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap ml-5">
            جدید ترین بازی ها
          </h2>{" "}
          <div className="w-full h-[8px] rounded-3xl bg-primary"></div>{" "}
        </div>
      </Animations>
      <LeftAnimation>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 my-10 ">
          {games?.map((game) => (
            <AccountsGames
              primaryImage={game.primaryImage}
              additionalImages={game.additionalImages}
              title={game.title}
              info={game.info}
              _id={game._id}
              tags={game.tags}
              averageRating={game.averageRating}
              key={game._id}
            />
          ))}
        </div>
      </LeftAnimation>
      <Link to={"/games/accountgames"}>
      <button type="button" className="moreBtn mb-10">مشاهده بیشتر</button>
      </Link>
    </div>
  );
};

export default NewestAccountGame;
