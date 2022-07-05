import styled from "styled-components";

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
  transition: transform 300ms ease;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  :hover {
    transform: scale(1.2);
  }
`

export const Status = styled.span`
  /* display: block; */
  width: 15px;
  height: 15px;

  background-color: ${p => p.isOnline ? "#4e4e4e" : "#e2e2e2"};
  border-radius: 50%;
`

export const Avatar = styled.img`
  width: 48px;
  margin-left: 20px;
`

export const Name = styled.p`
  margin-left: 20px;
  font-size: 20px;
`