import React from "react";
import { useEffect, useState } from "react";
import DeliveryInfo from "../modal/DeliveryInfo";
import axios from "axios";
import ConvertPrice from "../util/ConvertPrice";


const ListMenuItem = (props) => {
  // console.log(props);
  // option Data 저장
  const [optionData, setOptionData] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const openDeliveryInfo = () => {
    setIsShowing(true);
  };
  useEffect(() => {
    // console.log("isShowing", isShowing);
  }, [isShowing]);
  const fetchData = async () => {
    try {
      const optionData = await axios.get(
        "http://192.168.0.156:9988/menu/option?menuNo=" + props.item.miSeq
      );
      setOptionData(optionData.data.list);
    } catch (err) {
      console.log("옵션 정보 호출시 서버 죽음");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // 팝업창 css
  const popup = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div onClick={openDeliveryInfo}>
      <div className="flex justify-between h-40  border-dotted border-b border-gray-300">
        <img
          src={props.item.miImg ? props.item.miImg : "/photo/대체.png" }
          className="scale-75  rounded-3xl  shadow-md"
          // flex-shrink-0 object-contain w-40 h-40 border
          //       dark:border-transparent rounded-3xl
          //       outline-none  dark:bg-gray-500"
          alt={props.item.miName}
        ></img>
        <div className="flex justify-center  flex-col py-4 w-1/2  ">
          <div className="flex flex-col justify-center">
            <h2 className="font-bold "> {props.item.miName} </h2>
            <span className="text-xs my-2  ">{props.item.miAdditionalEx ? props.item.miAdditionalEx.substr(0,80): ""}</span>
            {/* <span>★★★★☆4.8</span> */}
            <span className="text-red-500 ">금액 {props.item.miPrice ? ConvertPrice(props.item.miPrice) : "NO price"}원</span>
            {/* 내용 협의 필요 */}
          </div>
        </div>
      </div>
      {/* 팝업창 */}
      {isShowing && (
        <div style={popup}>
          <DeliveryInfo
            setIsShowing={setIsShowing}
            item={props.item}
            optionData={optionData}
          />
        </div>
      )}
    </div>
  );
};

export default ListMenuItem;
