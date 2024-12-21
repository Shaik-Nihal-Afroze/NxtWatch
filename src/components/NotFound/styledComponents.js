import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #181818' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? ' #181818' : '#f9f9f9')};
  @media (min-width: 768px) {
    flex-direction: row;
    padding-right: 80px;
  }
`
export const SidebarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    min-height: 100vh;
    flex-shrink: 0;
  }
`

export const AllVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? ' #212121' : '#ebebeb')};
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
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 24px;
  }
`

export const FailureText2 = styled.p`
  color: #64748b;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 20px;
    width: 50%;
  }
`
