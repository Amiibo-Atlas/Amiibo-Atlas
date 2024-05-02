import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyles = () => (
    <Global
        styles={
            css`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            html,
            body {
                width: 100%;
                height: 100%;
                overflow-x: hidden;
            }
            body {
                line-height: 1.5;
                font-family: Arial, sans-serif;
            }`}
    />
);

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const AlignFooter = styled.div`
    margin-top: auto;
`;