/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
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
    background: ${({ online }) => (online ? '#00FF40' : 'grey')};
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
    flex-direction: column;
    flex-wrap: wrap;
    /* justify-content: flex-start; */
    padding-bottom: 5em;
    align-items: center;
`;

// export const RightSection = styled.div`
//     border: 2px solid black;
//     flex: 5;
//     display: flex;
//     height: 50px;
// `;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    flex: 5;
    text-align: center;
    display: flex;
    width: 50%;
`;

export const Collection = styled.div`
    margin: auto;
`;

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const modalContent = css`
    background-color: transparent;
    padding: 10px;
    position: absolute;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
`;

export const topper = css`
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: white;
    padding-bottom: 20px;
    background-color: #f80001;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    min-height: 50px; 
    border-radius: 15px 15px 0px 0px;
    border: 2px solid #f80001;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const informationBox = css`
    height: 500px;
    width: 500px;
    background-color: white;
    border-radius: 0 0 15px 15px;
`;

export const modalTopper = css`
    height: 500px;
    width: 500px;
    border: 2px solid black;
    border-radius: 5%;
`;

export const ModalButton = styled.button`
    height: 50px;
    width: 50px;
    margin-bottom: 15px;
    border-radius: 50%;
    right: 10px;
    position: absolute;
    top: -50px;
    font-size: 30px;
    color: white;
    border: 2px solid #5d5d5d;
    background-color: #5d5d5d;
    transition: all 0.3s ease;
    &:hover {
        border: 2px solid #282828;
        background-color: #282828;
    }
`;