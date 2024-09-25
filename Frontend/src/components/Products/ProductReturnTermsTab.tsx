import React from "react";

const ProductReturnTermsTab: React.FC = () => {
  const data = [
    { id: 1, titile: " سازنده بازی ", value: " rockstart " },
    { id: 2, titile: " پلتفرم  ", value: " ps4,ps5 " },
    { id: 3, titile: " حالت چند نفره  ", value: " دارد " },
    { id: 4, titile: " ریجن  ", value: " یک " },
    {
      id: 5,
      titile: " ظرفیت بندی  ",
      value: " ظرفیت یک و ظرفیت دو و ظرفیت سه ",
    },
  ];
  return (
    <div>
      <table className="min-w-full text-start text-sm font-light text-surface ">
        <tbody>
          {data.map((data) => (
            <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100  ">
              <td className="whitespace-nowrap px-6 font-bold py-4">
                {data.titile}
              </td>

              <td className="whitespace-nowrap px-6 py-4">{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductReturnTermsTab;
