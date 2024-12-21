import styled from 'styled-components'

export const AllVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-top: 24px;
  min-height: 100vh;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 90%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInput = styled.input`
  height: 40px;
  width: 85%;
  outline: none;
  border: 1px solid #606060;
  background-color: ${props => (props.isDarkTheme ? 'transparent' : 'white')};
  padding-left: 20px;
  font-size: 16px;
  font-family: 'Roboto';
  color: #606060;
`

export const SearchButton = styled.button`
  width: 15%;
  height: 40px;
  cursor: pointer;
  background-color: ${props => (props.isDarkTheme ? '#383838' : 'trasparent')};
  border: 1px solid #606060;
  color: ${props => (props.isDarkTheme ? 'white' : '#424242')};
`
export const EachVideoList = styled.ul`
  list-style: none;
  padding-left: 0px;
  min-height: 100vh;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  @media (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const FailureImage = styled.img`
  width: 300px;
  height: 240px;
  @media (min-width: 992px) {
    width: 440px;
    height: 320px;
  }
`
export const FailureText1 = styled.h1`
  color: ${props => props.color};
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 24px;
  }
`

export const FailureText2 = styled.p`
  color: #64748b;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 24px;
    width: 50%;
  }
`
export const RetryButton = styled.button`
  height: 45px;
  width: 90px;
  border-radius: 6px;
  background-color: #4f46e5;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  padding-top: 100px;
`
