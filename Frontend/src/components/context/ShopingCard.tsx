import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type shopingcardProps = {
  children: ReactNode;
};
type shopingcardContext = {
  // getItemqty: (id: number) => number;
  // InceraseCardQty: (id: number) => void;
  // DecreaseCardQty: (id: number) => void;
  removeFromCard: (id: string) => void;
  CardItems: cardItem[];
  OpenMiniShoppingcard: boolean;
  setOpenMiniShoppingcard: React.Dispatch<React.SetStateAction<boolean>>;
  testaccountGame: (data: cardItem) => void; // Add this line
};
type cardItem = {
  platform: string;
  price: number;
  capacity: string;
  _id: string;
  inStock: boolean;
  sellOne: boolean;
  cardmg: string;
  title: string;
};
const ShopingCardContext = createContext({} as shopingcardContext);
export const useShopingcard = () => {
  return useContext(ShopingCardContext);
};
export const ShopingcardProvider = ({ children }: shopingcardProps) => {
  const [CardItems, setCardItems] = useState<cardItem[]>([]);
  const [OpenMiniShoppingcard, setOpenMiniShoppingcard] = useState(false);
  useEffect(() => {
    localStorage.setItem("cardItems", JSON.stringify(CardItems));
    console.log("first");
  }, [CardItems]);
  // const getItemqty = (id: number) => {
  //   return CardItems;
  //   console.log(id)
  // };
  // const InceraseCardQty = (id: string) => {
  //   setCardItems((prev) => {
  //     if (prev.find((item) => item.id === id) == null) {
  //       return [...prev, { id, qty: 1 }];
  //     } else {
  //       prev.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, qty: item.qty + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };
  // const DecreaseCardQty = (id: number) => {
  //   setCardItems((prev) => {
  //     if (prev.find((item) => item.id === id)?.qty == 1) {
  //       return prev.filter((item) => item.id !== id);
  //     } else {
  //       prev.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, qty: item.qty - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };
  const removeFromCard = (id: string) => {
    setCardItems((prev) => {
      return prev.filter((item) => item._id !== id);
    });
  };
  const testaccountGame = (data:cardItem) => {
    if (!CardItems.some((item) => item._id === data._id)) {
      setCardItems((prev) => [...prev, data]);
    }
  };
  console.log(CardItems, "provider");
  return (
    <ShopingCardContext.Provider
      value={{
        // getItemqty,
        // InceraseCardQty,
        // DecreaseCardQty,
        testaccountGame,
        removeFromCard,
        CardItems,
        OpenMiniShoppingcard,
        setOpenMiniShoppingcard,
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
