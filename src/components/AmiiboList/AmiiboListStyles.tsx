import styled from '@emotion/styled';

export const PageContainer = styled.div`
    max-width: 1920px;
    padding: 0 24px;
    margin: 0 auto;
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
    margin: 0 -15px;
`;

export const FilterSection = styled.aside`
    flex: 3;
    width: 15em;
    margin: 1.25em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainSection = styled.div`
    flex: 7;
    width: 75em;
    min-height: 50em;
    overflow: auto;
    margin: 1.25em;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 3rem;
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