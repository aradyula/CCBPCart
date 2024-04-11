// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: #ffffff;
  margin: 30px;
  display: flex;
  flex-direction: row;
`

export const FormContainer = styled.form`
  height: 100vh;
  background-size: cover;
  background-color: #ffffff;
  margin: 30px;
  display: flex;
  flex-direction: column;
`
export const MemeContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-image: url('${props => props.bgImg}');
  font-size: ${props => props.font}px;
  color: #ffffff;
  width: 100%;
  margin: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #35469c;
  margin: 10px;
`
export const MHeading = styled.p`
  font-size: ${props => props.font}px;
  font-weight: bold;
  color: #ffffff;
  margin: 10px;
`

export const Label = styled.label`
  font-size: 20px;
  font-weight: normal;
  color: ##7e858e;
  margin: 10px;
`
export const Input = styled.input`
  width: 90%;
  border: 1px solid #7e858e;
  border-radius: 5px;
  margin: 10px;
  line-height: 30px;
  padding: 5px;
`
export const Generate = styled.button`
  width: 80px;
  height: 40px;
  color: #ffffff;
  background-color: #0b69ff;
  border: none;
  border-radius: 10px;
  align-self: flex-start;
  margin: 10px;
`
