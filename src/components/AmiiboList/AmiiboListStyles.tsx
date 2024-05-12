import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PageContainer = styled.div`
    max-width: 1920px;
    padding: 0 24px;
`;

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 2rem 0;
`;

export const Title = styled.h1`
    padding: 0 25px;
    margin: 0 auto;
`;

export const LayoutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 5em;
`;

export const ControlSection = styled.aside`
    flex: 3;
    max-width: 15em;
    padding-top: 1.25em;
    margin: 1.25em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainSection = styled.div`
    flex: 7;
    padding-top: 1.25em;
    max-width: 75em;
    min-height: 50em;
    overflow: auto;
    margin: 1.25em;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 20px;
    margin-bottom: 3rem;
    width: 100%;
`;

export const LoadMoreButton = styled.button`
    padding: 1em 8em;
    background-color: #E60711;
    color: white;
    border: none;
    border-radius: 99px;
    cursor: pointer;
    display: inline-block;
    font-size: .8125rem;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 19px;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 10;
`;

export const filterContainer = css`
    margin-bottom: 20px;
    width: 80%;
`;

export const filterTitle = css`
    color: #333;
    margin-bottom: 10px;
    border-bottom: 1px solid gray;
    padding: 10px 0;
`;

export const optionContainer = css`
    margin-bottom: 5px;
`;

export const optionLabel = css`
    font-size: 14px;
    color: #666;
`;

export const checkbox = css`
    margin-right: 10px;
`;

export const expandButton = css`
    margin-top: 10px;
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
`;

export const dropdown = css`
    padding: 10px;
    width: 80%;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
`;

export const ColMd8 = styled.div`
    width: 66.666667%;
`;

export const ColMd4 = styled.div`
    width: 33.333333%;
`;

export const BannerHero = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 20px;
    overflow: hidden;
    background-color: white;
    margin: 2rem 5rem;
`;