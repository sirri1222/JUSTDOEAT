import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyPage = () => {
 // 사용자 정보 수정을 위해서 정보를 가지고 옮
 const dispatch = useDispatch();
 const user = useSelector((state) => state.user);


 const [uiGen, setUiGender] = useState(1);

  const [uiEmail, setuiEmail] = useState("");
  const [uiPwd, setUiPwd] = useState("");
  const [uiPwdCheck, setUiPwdCheck] = useState("");
  const [uiId, setUiid] = useState("");
  const [uiPhone, setUiPhone] = useState("");
  const [uiName, setUiName] = useState("");
 
  const [uiBirth, setUiBirth] = useState("");
  useEffect(() => {
    setUiPhone("");
    setUiid("");
    setUiName(user.Name);
    setuiEmail(user.uiEmail);
    setUiPwd("");
    setUiPwdCheck("");
  }, []);

}

export default MyPage