/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Button } from '../AmiiboList/AmiiboListStyles';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

export const MainContent = styled.div`
    margin: auto;
`;

export const OnlineStatus = styled.label<{ online: boolean }>`
    background: ${({ online }) => (online ? "#00FF40" :  "grey" )};
    width: 10px;
    height: 10px;
    border: 2px solid black;
    border-radius: 20px;
    margin-top: 28px;
    min-width: 10px;
    min-height: 10px;
`;

export const ImageBox = styled.img`
    border: 1px solid #ddd;
    border-radius: 50%;
    height: 100px;
    width: 100px;
`;

export const ProfileContainer = styled.div`
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 15px;
    width: 90vw;
    height: 200px;
    margin: auto;
    padding: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    display: inline-block;
`;

export const ShareButton = styled.button`
    ${Button};
    top: 30%;
    left: 11%;
`;

export const ProfileName = styled.h3`
    text-align: left;
    min-width: 15px;
    margin-top: 11px;
    padding: 15px;
`;

export const ProfileContent = styled.div`
    display: inline-flex;
    position: relative;
`;

export const ProfileCount = styled.p`
    top: 21%;
    left: 11%;
    width: 100%;
`;

export const BottomContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 5em;
    align-items: center;
`;

export const RightSection = styled.div`
    border: 2px solid black;
    flex: 5;
    display: flex;
    height: 50px;
`;

export const LeftSection = styled.div`
    flex: 5;
    text-align: center;
    display: flex;
    width: 50%;
`;

export const Collection = styled.div`  
    margin: auto;
`;
