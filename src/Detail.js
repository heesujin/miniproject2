import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";

function Detail() {
  return (
    <Component>
      <Hd>
        <div>
          <Link to={"/"}>
            <BobImg src={bob} alt="" />
          </Link>
        </div>
        <Btns>
          <Link to={"/Add"}>
            <Btn>ADD RECIPE</Btn>
          </Link>
          <Link to={"/"}>
            <Btn>LOGOUT</Btn>
          </Link>
        </Btns>
        <div>
          <LogoImg src={logo} alt="" />
        </div>
      </Hd>
      <Md>
        <Name>name</Name>
        <Time>00.00.00 00:00</Time>
        <Link to={"/modify/"} style={{ textDecoration: "none" }}>
          <Btt>Modify</Btt>
        </Link>
        <Link to={"/detail"} style={{ textDecoration: "none" }}>
          <Btt>Delete</Btt>
        </Link>
      </Md>
      <ImgBox>
        <RImg
          src="https://i.ytimg.com/vi/Yn8ZFTBCJJQ/maxresdefault.jpg"
          alt=""
        />
      </ImgBox>
      <RtextBox>
        <p>
          먼저, 춘장600g에 식용유 4컵을 붓고 낮은 온도에서 튀기듯 볶아줍니다.
          <br />
          보글보글 끓기 시작한 후부터 약 10분정도 볶아주심 됩니다. <br />
          이렇게 하면 춘장속속 골고루 기름이 배어서 텁텁한 맛이 사라지고 고소한
          맛이 난다고 해요 <br />
          이렇게 하면 춘장속속 골고루 기름이 배어서 텁텁한 맛이 사라지고 고소한
          맛이 난다고 해요 <br />
          볶고 나면 춘장볶은 기름은 이렇게 분리해줍니다.
          <br />
          아주 깨끗하게 잘 분리가 되어요.. <br />이 기름은 파기름 만들때 다시
          재사용 할거랍니다. <br />
          춘장 볶았던 기름,소주컵 1/2컵분량을 파와 함께 볶아줍니다
          <br />
          파가 다 익기전에 돼지고기 넣고 볶아주시구요.. <br />
          돼지기름과 파기름이 잘 섞여지면 간장을 소주컵 1/2컵을 넣어 볶아줍니다.
          <br /> 양파먼저 넣고 좀 볶아주다 양배추,호박을 넣고 잘 볶아줍니다..{" "}
          <br />
          여기서 신의한수, 설탕을 소주컵 1컵정도의 양을 넣고 볶아줍니다. <br />
          그 다음 볶은 춘장을 조금씩 넣어가며 간을 맞춰 넣어가며 볶아주세요.....{" "}
          <br />
          볶은 춘장은 많은 양이에요..
          <br />다 넣으시면 안돼요 ^^
          <br /> 여기까지 하면 간짜장이 되는겁니다.
          <br />
          여기에 물을 넣어주면 일반짜장이 되는거구요..
          <br />전 일반짜장이니 물을 넣고 끓여줍니다. <br />
          백선생은 컵라면용기 하나정도의 양을 부어 넣어주더라구요..
          <br />
          춘장 넣은 양에 따라 물의 양은 조금씩 조절하시면 될것 같아요..
          <br />
          싱거우면 볶은춘장을 더 넣으면 되는거구요..^^
          <br /> 끓이다가 전분물 넣어 농도 맞춰주면 끝! 물전분은
          물:전분=1:1양으로 만드시면 됩니다. <br />
          조금씩 넣어가며 농도를 조절해주세요.
          <br />
          6큰술이상이 들어간듯 해요 이것두 취향껏 조절해 주시구요.. <br />
          여기서 윤기를 더해줄려면 국자로, 남은 파기름 약간을 쓰윽 둘러주면
          됩니다
        </p>
      </RtextBox>
    </Component>
  );
}

const Name = styled.h3`
  margin-top: 20px;
  margin-left: 20px;
`;

const Time = styled.p`
  margin-top: 28px;
  margin-left: 680px;
`;

const Hd = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  /* background-color: brown; */
  width: 1024px;
  height: 320px;
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }
`;

const RImg = styled.img`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: auto;

  width: 1024px;
  height: 500px;
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  border: 2px solid black;
  border-bottom: 0;
  border-top: 0;
`;
const RtextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: auto;

  width: 1024px;

  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  border: 2px solid black;
  border-top: 0px;
  margin-bottom: 50px;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  padding-bottom: 10px;
`;

const Md = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  /* background-color: greenyellow; */

  /* background-color: brown; */
  width: 1024px;
  height: 68px;
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  margin-top: 85px;
  border: 2px solid black;
  border-top-left-radius: 7px;

  border-top-right-radius: 7px;
`;

const Component = styled.div`
  font-family: regular;
`;

const Btns = styled.div`
  margin-left: 700px;
  margin-top: -85px;
`;

const BobImg = styled.img`
  width: 50px;
  margin: 15px;
`;

const LogoImg = styled.img`
  margin-top: 90px;
  margin-left: 420px;
`;

const Btn = styled.button`
  margin: 6px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  font-weight: 600;
  border: 2px solid black;
  border-radius: 10px;
`;

const Btt = styled.button`
  height: 30px;
  margin-top: 20px;
  margin-left: 8px;
  background-color: transparent;
  color: black;
  border-radius: 7px;
  text-decoration: none;
  border: 1px solid black;
  &:hover {
    border: 2px solid black;
  }
`;

export default Detail;
