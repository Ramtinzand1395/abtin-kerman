import { FaHome, FaTrash } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { RiGameFill } from "react-icons/ri";
import { SiAmazongames, SiRiotgames } from "react-icons/si";
export const MenuData = [
  {
    id: "menu1",
    icon:<IoGameController   />,
    title: "کنسول بازی",
    items: [
      {
        title: "پلی استیشن",
        options: [
          { label: "پلی استیشن", link: "/products/playstations" },
          { label: "پلی استیشن 5", link: "/products/playstation-5" },
          { label: "پلی استیشن 4", link: "/products/playstation-4" },
        ],
      },
      {
        title: "ایکس باکس",
        options: [
          { label: "ایکس باکس سریز", link: "/products/xbox-series" },
          { label: "ایکس باکس وان", link: "/products/xbox-one" },
        ],
      },
      {
        title: "کنسول‌های کلاسیک",
        options: [
          { label: "پلی استیشن 2", link: "/products/playstation-2" },
          { label: "سوپر سگا", link: "/products/super-sega" },
        ],
      },
      {
        title: "کنسول‌های کارکرده",
        options: [
          { label: "پلی استیشن 4", link: "/products/used-playstation-4" },
          { label: "پلی استیشن 3", link: "/products/used-playstation-3" },
        ],
      },
    ],
  },
  {
    id: "menu2",
    title: "لوازم جانبی",
    icon:<SiAmazongames  />,

    items: [
      {
        title: "لوازم پلی استیشن 5",
        options: [
          { label: "کنترلر", link: "/products/accessories/ps5-controller" },
          { label: "هدست", link: "/products/accessories/ps5-headset" },
          { label: "شارژر و استند", link: "/products/accessories/ps5-charger" },
          { label: "کیف و کاور", link: "/products/accessories/ps5-cover" },
        ],
      },
      {
        title: "لوازم پلی استیشن 4",
        options: [
          { label: "کنترلر", link: "/products/accessories/ps4-controller" },
          { label: "هدست", link: "/products/accessories/ps4-headset" },
          { label: "شارژر و استند", link: "/products/accessories/ps4-charger" },
        ],
      },
    ],
  },
  {
    id: "menu3",
    title: "بازی ها",
    icon:<RiGameFill  />,

    items: [
      {
        title: "پلی استیشن 5",
        options: [
          { label: "دیسک", link: "/games/ps5/disc" },
          { label: "اکانت بازی های ظرفیتی", link: "/games/ps5/account" },
          { label: "پلی استیشین پلاس", link: "/games/ps5/ps-plus" },
        ],
      },
      {
        title: "پلی استیشن 4",
        options: [
          { label: "دیسک", link: "/games/ps4/disc" },
          { label: "اکانت بازی های ظرفیتی", link: "/games/ps4/account" },
          { label: "پلی استیشین پلاس", link: "/games/ps4/ps-plus" },
        ],
      },
      {
        title: "ایکس باکس",
        options: [
          { label: "بازی‌های قانونی", link: "/games/accountgames" },
          { label: "گیم پس", link: "/games/game-pass" },
        ],
      },
    ],
  },
  {
    id: "menu4",
    title: "لوازم گیمینگ",
    icon:<SiRiotgames   />,

    items: [
      {
        title: "لوازم جانبی گیمینگ",
        options: [
          { label: "کیبورد", link: "/gaming-accessories/keyboards" },
          { label: "ماوس", link: "/gaming-accessories/mice" },
          { label: "هدست", link: "/gaming-accessories/headsets" },
        ],
      },
    ],
  },
];
