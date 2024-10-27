import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";

const OrderTab = ({ data, setOpenModall }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when the modal is closed
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Calculate total price for all items
  const totalPrice = data.items.reduce((acc, item) => {
    const price =
      item?.SelectedPlatform !== null
        ? item?.SelectedPlatform?.price
        : item?.populatedData?.price;
    return acc + item.ItemQty * price;
  }, 0);

  return (
    <div
      onClick={() => setOpenModall(false)}
      className="bg-gray-700 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <div
        className={`md:w-[50vw] w-[80vw] h-[70vh] overflow-y-auto rounded-2xl bg-white px-10`}
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between static top-0">
          <p className="flex items-center">لیست سفارش</p>
          <MdClose
            onClick={() => setOpenModall(false)}
            size={30}
            className="m-4 cursor-pointer text-black"
          />
        </div>
        <table className="min-w-full text-left text-sm font-light text-surface">
          <thead className="border-b border-neutral-200 font-medium">
            <tr>
              <th scope="col" className="px-6 py-4 text-start">نام محصول</th>
              <th scope="col" className="px-6 py-4 text-start">تعداد</th>
              <th scope="col" className="px-6 py-4 text-start">قیمت</th>
              <th scope="col" className="px-6 py-4 text-start">جمع سفارش</th>
            </tr>
          </thead>
          <tbody>
            {data?.items?.map((item) => {
              const price =
                item?.SelectedPlatform !== null
                  ? item?.SelectedPlatform?.price
                  : item?.populatedData?.price;

              return (
                <tr
                  key={item._id}
                  className="border-b text-start border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-bold">
                    {item?.populatedData?.title}
                    {item?.SelectedPlatform !== null && (
                      <div className="flex items-center">
                        {item?.SelectedPlatform?.platform}{" "}
                        {item?.SelectedPlatform?.capacity}
                      </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{item.ItemQty}</td>
                  <td className="whitespace-nowrap px-6 py-4">{price}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.ItemQty * price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <p className=" font-semibold">
            جمع کل: {totalPrice} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderTab;
