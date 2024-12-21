import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
`

export const LoginFormContainer = styled.form`
  background-color: ${props => (props.isDarkTheme ? '#000000' : 'white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  width: 95%;
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0px 0px 16px 16px #ebebeb'};
  border-radius: 12px;
  padding-top: 36px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    width: 520px;
    height: 500px;
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const ImageLogo = styled.img`
  width: 150px;
  margin-bottom: 36px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`

export const LabelText = styled.label`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? 'white' : '#606060')};
  margin-bottom: 16px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #64748b;
  font-size: 18px;
  font-family: 'Roboto';
  padding-left: 20px;
  color: #606060;
  outline: none;
  background-color: transparent;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  align-self: flex-start;
`

export const CheckboxInput = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.isDarkTheme ? 'white' : '#231f20')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const LoginButton = styled.button`
  height: 48px;
  width: 100%;
  color: #ffffff;
  border-radius: 8px;
  background-color: #3b82f6;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-top: 24px;
  outline: none;
`

export const ErrorMsg = styled.p`
color:#ff0000;
font-size:16px;
font-family:"Roboto",
align-self:flex-start;
width:100%;
margin-top:2px;
`
