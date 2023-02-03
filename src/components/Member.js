import React from "react";
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <div className="flex-wrap justify-between content-center  ">
      {/* <Link to="/home">
        <button type="button" className="btn-1 btn btn-success">
          HOME
        </button>
      </Link> */}
      {/* 프엔 */}
      <p className="flex justify-between">FRONTEND</p>
      <div className="flex ">
        <div className="card">
          <img
            src="/photo/IMG_8638.png"
            className="card-img-top"
            alt="손현지"
          ></img>
          <div className="card-body">
            <h5 className="card-title">팀장 손현지</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              헤더 및 로그인 ,회원가입, 아이디/비번 찾기 페이지
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/sirri1222">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="/photo/IMG_8637.png"
            className="card-img-top"
            alt="김주영"
          ></img>
          <div className="card-body">
            <h5 className="card-title">팀원 김주영</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">전체적인 ui 및 리스트 페이지</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/zuyoe">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/photo/dongyu.png" className="card-img-top" alt=""></img>
          <div className="card-body">
            <h5 className="card-title">팀원 하경미</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">메뉴,리뷰,가게정보 장바구니</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* 백엔드 */}
      <p className="title-main">BACKEND</p>

      <div className="flex">
        <div className="card">
          <img
            src="/photo/민경.png"
            className="card-img-top"
            alt="우민경"
          ></img>
          <div className="card-body">
            <h5 className="card-title">팀장 김한수</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">회원 데이터</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/shiningok">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="/photo/진희.png"
            className="card-img-top"
            alt="박진희"
          ></img>
          <div className="card-body">
            <h5 className="card-title">팀원 이태훈</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">메뉴</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/nunnunnu">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="/photo/진혁.png"
            className="card-img-top"
            alt="박진혁"
          ></img>
          <div className="card-body">
            <h5 className="card-title">팀원 김동현</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">가게 정보</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/parkmawani">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src=""
            className="card-img-top"
            alt=""
          ></img>
          <div className="card-body">
            <h5 className="card-title">팀원 김성민</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">리뷰</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/dlcksgml123123">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
