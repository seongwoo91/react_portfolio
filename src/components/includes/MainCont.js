import React from "react";
import MenuCont from "./MenuCont";
import { Link } from "react-router-dom";

function MainCont() {
  return (
    <div id="main_wrap">
      <MenuCont />
      <div id="main_cont" className="load">
        <div>{/* 1 */}</div>
        <div className="linkblock p10">
          {/* 2 */}
          <h4>SCRIPT</h4>
          <p>
            이미지 슬라이드 부터 테트리스 게임까지 자바스크립트를 이용하여
            공부하였으며, 알고리즘을 통하여 깊이를 더하다.
          </p>
          <div className="num_box">
            <Link to="#3">1</Link>
            <Link to="#3">2</Link>
            <Link to="#3">3</Link>
          </div>
        </div>
        <div>{/* 3 */}</div>
        <div>
          {/* 4 */}
          <h1>frontend</h1>
        </div>
        <div className="linkblock p10">
          {/* 5 */}
          <h4>SITE CODING</h4>
          <p>
            웹 표준 코딩부터 레이아웃, 반응형, 패럴랙스를 통해 사이트 코딩을
            마스터하다.
          </p>
          <div className="num_box">
            <Link to="#3">1</Link>
            <Link to="#3">2</Link>
            <Link to="#3">3</Link>
          </div>
        </div>
        <div className="bl">
          {/* 6 */}
          <h2>portfolio</h2>
        </div>
        <div>{/* 7 */}</div>
        <div>{/* 8 */}</div>
        <div>{/* 9 */}</div>
        <div>{/* 10 */}</div>
        <div className="p10">
          {/* 11 */}
          <p>
            항공기계설계를 전공으로 공부하였고, 다양한 분야의 업무를 하며 나의
            적성에 맞는 일을 찾고자 노력을 했습니다. 다니던 대학원을 휴학하고
            국비지원학원에서 약 6개월간의 여정을 시작했습니다.
          </p>
        </div>
        <div>{/* 12 */}</div>
        <div className="linkblock p10">
          {/* 13 */}
          <h4>REACT, VUE</h4>
          <p>
            자바스크립트 프레임 웍 리액트 뷰, 껌이지 그냥 잘함 구경해보삼
            자바스크립트 프레임 웍 리액트 뷰, 껌이지 그냥 잘함 구경해보삼
          </p>
          <div className="num_box">
            <Link to="#3">1</Link>
            <Link to="#3">2</Link>
          </div>
        </div>
        <div>{/* 14 */}</div>
        <div className="linkblock p10">
          {/* 15 */}
          <h4>ANIMATION</h4>
          <p>
            자바스크립트 프레임 웍 리액트 뷰, 껌이지 그냥 잘함 구경해보삼
            자바스크립트 프레임 웍 리액트 뷰, 껌이지 그냥 잘함 구경해보삼
          </p>
          <Link to="#3" className="more">
            MORE
          </Link>
        </div>
        <div>
          {/* 16 */}
          <div className="snsbox">
            <Link to="#3">
              <img src="./img/instagram.svg" alt="" />
            </Link>
            <Link to="#3">
              <img src="./img/github.svg" alt="" />
            </Link>
            <Link to="#3">
              <img src="./img/Link.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCont;
