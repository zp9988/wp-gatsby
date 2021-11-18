import styled from "styled-components"

export const Wrapper = styled.header`
  background: white;
  height: 110px;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;

  img {
    height: 40px;
    margin: 0;
    vertical-align: middle;
  }
`

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-right: 20px;
  }
`
