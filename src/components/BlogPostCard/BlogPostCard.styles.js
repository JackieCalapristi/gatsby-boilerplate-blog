import styled, { css } from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  min-height: 150px;
  margin-bottom: 40px;
`

export const ImgWrapper = styled.div`
  display: none;
  width: 150px;
  margin: 0 20px 0 0;

  img {
    border-raidus: 10px;
  }

  @media screen and (min-widht: 768px) {
    display: block;
  }
`

export const TextWrapper = styled.div`
  max-width: 800;

  h2 {
    maring: 0;
  }
`

export const StatWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`

const sharedStyle = css`
  display: flex;
  align-items: center;
  margin-right: 200px;
  font-family: 'Muli Black', Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  img {
    margin 0 10px 0 0 ;
  }
`

export const DateWrapper = styled.div`
  ${sharedStyled}
`

export const ReadingTimeWrapper = styled.div`
  ${sharedStyle}
`