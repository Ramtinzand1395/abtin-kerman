import React, { useEffect, useState } from "react";
import { getUserOrdersService } from "../../../../services/ApiServices";
import { Order, OrderItems } from "../../../../types";
import { useParams } from "react-router-dom";
import OrderTab from "../orderTable/OrderTab";
import BtnTow from "../../../utils/BtnTow";

const UserOrders: React.FC = () => {
  const [Orders, setOrders] = useState<Order[] | null>(null);
  const [orderDesc, setOrderDesc] = useState("newestFirst");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [OpenModall, setOpenModall] = useState(false);
  const [SelectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const { userId } = useParams();
  useEffect(() => {
    const getOrders = async () => {
      if (userId) {
        const { data } = await getUserOrdersService(
          userId,
          pageNumber,
          orderDesc
        );
        setOrders(data.userOrders);
        setTotalPages(data.totalPages);
      }
    };
    getOrders();
  }, [orderDesc, pageNumber]);

  const calculateTotalPrice = (items: OrderItems[]) => {
    console.log(items);
    return items.reduce((total, item) => {
      const price =
        item?.itemType === "Games"
          ? Number(item.SelectedPlatform.price) || 0
          : Number(item.populatedData?.price) || 0;
      return total + price * item.ItemQty;
    }, 0);
  };

  return (
    <div className=" w-full md:container md:mx-auto mx-2">
      <select title="Order" onChange={(e) => setOrderDesc(e.target.value)}>
        <option value="newestFirst">جدیدترین</option>
        <option value="oldestFirst">قدیمی ترین</option>
      </select>
      <div className="flex flex-col border-2 border-black">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface">
                <thead className="border-b border-neutral-200 font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-start">
                      سفارشات
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      جمع سفارش
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      کد رهگیری
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      تغییر وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Orders?.map((data) => (
                    <tr
                      key={data._id}
                      className="border-b text-start border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <BtnTow
                          ButtonColor="bg-green-500 hover:from-green-500 hover:to-green-400 hover:ring-green-400"
                          ButtonText="مشاهده سفارش"
                          onClick={() => {
                            setOpenModall(true);
                            data && setSelectedOrder(data);
                          }}
                        />
                        {OpenModall && SelectedOrder?._id === data._id && (
                          <OrderTab
                            data={SelectedOrder}
                            setOpenModall={setOpenModall}
                          />
                        )}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {calculateTotalPrice(data.items)} تومان
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.TrackingCode}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
    </div>
  );
};

export default UserOrders;
