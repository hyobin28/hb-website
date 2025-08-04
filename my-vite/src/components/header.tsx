import styled from "styled-components";

//헤더 전체를 감싸는 상단 바
const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #ddf4ff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`;

//중앙 정렬된 고정 폭 컨테이너
const Inner = styled.div`
  max-width: 1322px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  height: 91px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//브랜드명, 좌측 정렬
const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #222;
  white-space: nowrap;  //한줄로만 표시
`;

//메뉴 영역, 우측 정렬
const Nav = styled.nav`
  display: flex;
  gap: 40px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    white-space: nowrap;
  }
`;

//개별 링크
const NavItem = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #0070f3;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Inner>
        <Logo>Hyobin website</Logo>
        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Product</NavItem>
          <NavItem href="#">Pricing</NavItem>
          <NavItem href="#">Contact</NavItem>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
}
