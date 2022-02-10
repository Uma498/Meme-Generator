import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 24px;
  font-family: 'Open Sans';
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 320px;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin-top: 6px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSize}px;
  font-weight: 600;
  font-family: 'Open Sans';
`

export const MemeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-size: 14px;
  font-family: 'Open Sans';
  height: 40px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  margin-top: 4px;
  margin-bottom: 20px;
  outline: none;
`

export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-size: 14px;
  font-family: 'Open Sans';
  height: 40px;
  padding: 8px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
`

export const GenerateButton = styled.button`
color: #ffffff;
  background-color: #0b69ff;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight:500;
  min-width:32px;
  max-width:148px;
  border: none;
  border-radius: 6px;
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px
  margin-top: 16px;
  outline: none;
  cursor: pointer;
`
