import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
`

export const Avatar = styled.img`
  width: 80px;
  border: 1px solid gray;
  border-radius: 50%;
`

export const UserName = styled.p`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
`

export const UserInfo = styled.p`
  margin-top: 10px;

  font-size: 14px;
  color: gray;
`

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  border-top: 1px solid #c0c0c0;
  
`

export const Item = styled.li`
  display: flex;
  flex-basis: calc(100% / 3 );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
  background-color: rgb(240, 240, 240);

  :not(:last-child) {
    border-right: 1px solid #c0c0c0;
  }
`

export const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgb(180, 180, 180);
`

export const Value = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
`