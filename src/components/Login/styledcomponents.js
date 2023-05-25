import styled from 'styled-components'

export const Div1 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => (p.props ? '#231f20' : '#ffffff')};
`

export const Div2 = styled.div`
  padding: 2%;
  display: flex;
  border-radius: 8px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: ${p => (p.props ? 'black' : '#f9f9f9')};
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
`
export const Input = styled.input`
  color: black;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 2% auto;
  height: 40px;
  width: 100%;
  border: 1px solid ${p => (p.props ? '#94a3b8' : '#ebebeb')};
  &:focus {
    background-color: #e6f2ff;
    outline: none; /* Remove default focus outline */
    border-color: #487edb; /* Specify the color for the glowing border */
    box-shadow: 1px 1px 2px #80bdff; /* Optional: Add a box shadow for extra emphasis */
  }
`

export const Img = styled.img`
  width: 40%;
  aspect-ratio: 4;
  margin: 0px auto;
`

export const Label = styled.label`
  color: ${p => (p.props ? '#f9f9f9' : '#909090')};
  font-family: 'Roboto';
  font-size: 14px;
  margin-right: auto;
`

export const Button = styled.button`
  color: white;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 10px;
  padding: auto;
  margin-top: 4%;
  height: 40px;
  width: 100%;
  border: none;
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  background-color: transparent;
`
