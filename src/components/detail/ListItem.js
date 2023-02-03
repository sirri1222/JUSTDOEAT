import { Link } from "react-router-dom";
import ConvertPrice from "../util/ConvertPrice";

const ListItem = ({ item }) => {
  console.log(item);

  const deliveryInfo = item.storeInfo.deliveryInfo;
  console.log(deliveryInfo);

  return (
    <li>
      <Link to={`/about/${item.storeInfo.siSeq}`} state={item}>
        <div
          className="flex flex-col max-w-3xl border-b-2 p-6 mx-auto sm:p-4
         dark:bg-gray-900 dark:text-gray-100"
        >
          <div className="flex flex-col py-3 sm:flex-row sm:justify-between">
            <div className="flex w-1/2 space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-contain w-40 h-40 border
                dark:border-transparent rounded-3xl
                outline-none  dark:bg-gray-500"
                src={`${item.storeInfo.siMainImg}`}
                alt="Polaroid camera"
              />{" "}
            </div>
            <div className="flex justify-between w-full my-auto">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold leading-snug">
                  {item.storeInfo.siName}
                </h3>
                <div className="flex flex-col ">
                  {/* <span className="text-sm  ">
                    <span className="font-bold ">Open : </span>{" "}
                    {deliveryInfo.map((item) => {
                      return <div>{item.dfiDeliveryFee}원</div>;
                    })} /
                    {item.storeDetail.sdOpenTime} -{" "}
                    <span className="font-bold "> Close : </span>{" "}
                    {item.sdCloseTime}
                    {item.storeDetail.sdCloseTime}{" "}
                  </span> */}
                  <span className="text-sm">
                    <span className="font-bold ">최소주문금액 : </span>{" "}
                    {item.storeInfo.siMinPrice ?  ConvertPrice(item.storeInfo.siMinPrice) : "no price"}원
                  </span>
                  <span className="text-sm">
                    <span className="font-bold ">배달비 : </span> 
                    {deliveryInfo.map((item) => {
                      return <span>{item.dfiDeliveryFee ? ConvertPrice(item.dfiDeliveryFee) : "0"} 원</span>;
                    })}
                  </span>
                  <span className="text-sm">
                    <span className="font-bold ">배달시간 : </span>{" "}
                    {item.storeInfo.siMinDeliveryTime} ~{" "}
                    {item.storeInfo.siMaxDeliveryTime}{" "}
                  </span>
                </div>
              </div>
              <div className="flex text-sm divide-x"></div>
              <div className="text-right">
                <button
                  type="button"
                  className="text-white mt-7 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  선택하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
