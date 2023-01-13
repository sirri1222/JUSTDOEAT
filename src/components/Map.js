import React from 'react'
import { Map } from "react-kakao-maps-sdk";
const Map = () => {
  return (
    <div>
       <Map
      center={{ lat: 37.4882, lng: 127.0648 }}
      style={{ width: "100%", height: "360px" }}
    />
    </div>
  )
}

export default Map