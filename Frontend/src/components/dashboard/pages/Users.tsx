import React, { useEffect, useState } from "react";

import { getUsersService } from "../../../services/ApiServices";
import { User } from "../../../types";
// import Spiner from "../../../utils/Spiner";

const Users: React.FC = () => {
  const [Users, setUsers] = useState<User[]>([]);
  const [orderDesc, setOrderDesc] = useState("newestFirst");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [LodaingGames, setLodaingUsers] = useState(false);
  //   const [OpenModall, setOpenModall] = useState(false);
  //   const [SelectedProduct, setSelectedProduct] = useState<User>(Users[0]);
  //   const handleOpenModall = (product: User) => {
  //     setOpenModall(true);
  //     setSelectedProduct(product);
  //   };
  useEffect(() => {
    setLodaingUsers(true);
    const getUsers = async () => {
      try {
        const { data } = await getUsersService(pageNumber, orderDesc);
        console.log(data);
        setUsers(data.users);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.log(err);
      } finally {
        setLodaingUsers(false);
      }
    };
    getUsers();
  }, [orderDesc, pageNumber, LodaingGames]);
  // if (LodaingGames === true)  <Spiner />;
  return (
    <div className="w-full md:container md:mx-auto mx-2 my-10">
      <select title="Order" onChange={(e) => setOrderDesc(e.target.value)}>
        <option value="newestFirst">جدیدترین</option>
        <option value="oldestFirst">قدیمی ترین</option>
      </select>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface ">
              <thead className="border-b border-neutral-200 font-medium ">
                <tr>
                  <th scope="col" className="px-6 py-4 text-start">
                    عکس کاربر
                  </th>
                  <th scope="col" className="px-6 py-4 text-start">
                    ایمیل
                  </th>
                  <th scope="col" className="px-6 py-4 text-start">
                    نام
                  </th>
                  <th scope="col" className="px-6 py-4 text-start">
                    نام خانوادگی
                  </th>
                  <th scope="col" className="px-6 py-4 text-start">
                    آدرس
                  </th>
                  <th scope="col" className="px-6 py-4 text-start">
                    شماره تماس
                  </th>{" "}
                  <th scope="col" className="px-6 py-4 text-start">
                    سفارشات
                  </th>
                </tr>
              </thead>
              <tbody>
                {Users?.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b text-start border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100  "
                  >
                    <td className="whitespace-nowrap font-bold px-6 py-4 ">
                      <div className="flex items-center">
                        <img
                          // src={`http://localhost:5000/${data.primaryImage?.direction}`}
                          //! change
                          src={`${user.profile}`}
                          className="w-14 h-14 rounded-lg ml-5"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 flex flex-col">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.firstName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.lastName}
                    </td>
                    <td className="flex items-center justify-around">
                      {user.address?.address}
                      {user.address?.city}
                      {user.address?.plaque}
                      {user.address?.postalCode}
                      {user.address?.provider}
                      {user.address?.unit}
                    </td>
                    <td className="flex items-center justify-around">
                      {user.phone}
                    </td>{" "}
                    {/* <td className="flex items-center justify-around">
                      {user?.order ? (
                        user?.order?.map((order) => (
                          <div className="">{console.log(order)}</div>
                        ))
                      ) : (
                        <div>asddsa</div>
                      )}
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <button
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 ${
                pageNumber === 1 ? "pointer-events-none text-surface/50" : ""
              }`}
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 ${
                  pageNumber === index + 1
                    ? "bg-primary-100 font-medium text-primary-700"
                    : ""
                }`}
                onClick={() => setPageNumber(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 ${
                pageNumber === totalPages
                  ? "pointer-events-none text-surface/50"
                  : ""
              }`}
              onClick={() =>
                setPageNumber((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
      {/* {OpenModall && SelectedProduct && (
        <EditeGameModall
          SelectedProduct={SelectedProduct}
          setSelectedProduct={setSelectedProduct}
          setOpenModall={setOpenModall}
          setLodaingGames={setLodaingGames}
        />
      )} */}
    </div>
  );
};

export default Users;
