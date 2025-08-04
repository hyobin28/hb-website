import styled from "styled-components";

//메인 전체
const MainWrapper = styled.main`
  width: 100%;
  background-color: #ddf4ff;
`;

//중앙 정렬된 고정 폭
const Inner = styled.div`
  max-width: 1439px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 24px;
  height: 682px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

//좌측 정렬
const Content = styled.div`
  max-width: 573px;
  height: 386px;
  margin: 40px;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

//소제목
const SubTitle = styled.h5`
  font-size: 20px;
  color: #96bb7c;
  margin-bottom: 30px;
`;

//메인 제목
const MainTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #222;
  margin-bottom: 30px;
`;

//내용
const MainText = styled.p`
  font-size: 20px;
  color: #737373;
  margin-bottom: 30px;
`;

//버튼 영역
const ButtonSection = styled.div`
  display: flex;
  gap: 20px;
`;

//버튼 공통 속성
const BaseButton = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  border: 2px solid;
  border-radius: 5px;
`;

//버튼
const ButtonOne = styled(BaseButton)`
  background-color: #96bb7c;
  color: white;
  border-color: #96bb7c;
`;

const ButtonTwo = styled(BaseButton)`
  background-color: #ddf4ff;
  color: #96bb7c;
  border-color: #96bb7c;
`;

//우측 정렬
const MainImage = styled.img`
  max-width: 400px;
`;

export default function Main() {
  return (
    <MainWrapper>
      <Inner>
        <Content>
          <SubTitle>소제목</SubTitle>
          <MainTitle>메인제목</MainTitle>
          <MainText>메인내용입니당</MainText>

          <ButtonSection>
            <ButtonOne>버튼1</ButtonOne>
            <ButtonTwo>버튼2</ButtonTwo>
          </ButtonSection>
          
        </Content>
        <MainImage></MainImage>
      </Inner>
    </MainWrapper>
  );
}
