import React, { useState, useEffect } from "react";
import { getSearchresService } from "../../services/ApiServices";
import { Link } from "react-router-dom";
import { ImageType } from "../../types";

interface Product {
  id: string;
  title: string;
  link: string;
  primaryImage: ImageType;
}

const SearchProducts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.length >= 3) {
        try {
          const { data } = await getSearchresService(searchTerm);
          setSearchResults(data.results);
          console.log(data);
          setIsDropdownVisible(true);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      } else {
        setSearchResults([]);
        setIsDropdownVisible(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type="search"
        title="search"
        placeholder="جستجو نام, برند,..."
        id="search-dropdown"
        value={searchTerm}
        onChange={handleInputChange}
        className="block p-2.5 w-full md:w-[400px] z-20 text-sm text-gray-900 bg-[#f0f0f1] rounded-lg focus:ring-black-500 focus:border-black-500"
      />
      {isDropdownVisible && searchResults.length > 0 && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-lg z-10">
          <ul>
            {searchResults.map((product) => (
              <Link
                onClick={() => setSearchTerm("")}
                key={product.id}
                to={product.link}
              >
                <li className="px-4 py-2 hover:bg-gray-200 flex items-center border-b-2 p-2 justify-between">
                  <img
                   width={"400px"}
                   height={"400px"}
                    className="w-10 h-10 rounded-md"
                    src={product.primaryImage.direction}
                    alt={product.primaryImage.imageName}
                  />
                  <p>{product.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
// import React from "react";

// const SearchProducts: React.FC = () => {
//   return (
//     <div className="relative w-full">
//       <input
//         type="search"
//         title="serach"
//         placeholder="جستجو نام, برند,..."
//         id="search-dropdown"
//         className="block p-2.5 w-full md:w-[400px] z-20 text-sm text-gray-900 bg-[#f0f0f1] rounded-lg focus:ring-black-500 focus:border-blaring-black-500"
//       />
//       <button
//         type="button"
//         className="absolute top-0 end-0 p-1.5 w-[70px] font-medium h-full text-xs text-white bg-secondery rounded-e-xl border  hover:bg-primary  focus:ring-4 focus:outline-none focus:ring-blue-300 "
//       >
//         جستجو
//       </button>
//     </div>
//   );
// };

// export default SearchProducts;
