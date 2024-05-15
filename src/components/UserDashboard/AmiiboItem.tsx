/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Amiibo } from '../../types/Amiibo';


interface AmiiboProps {
    amiibo: Amiibo;
    onRemove: (amiibo: Amiibo) => void;
    Icon: React.ElementType;
    
}

const ItemBox = styled.div`
    display: flex;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 20px;
    position: relative;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    }
    margin: 15px;
    padding: 1rem;
    height: 55px;
    width: 600px;
    font-size: 15px;
    background-color: white;
`;

const AmiiboImg = styled.img`
    width: auto;
    height: auto;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    padding: .3rem 1rem .5rem;
    min-height: 70px;
`;

const Button = css`
    padding: 10px;
    background-color: white;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
    border-radius: 999px;
    text-transform: uppercase;
    font-size: .8125rem;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 19px;
    &:hover {
        border-color: #646cff;
    }
    margin-bottom: auto;
`;

const IconDesign = css`
    cursor: pointer;
    font-size: 24px;
    transition: color 0.3s ease;
    &:hover {
        color: #ff0000;
    }
    margin-bottom: auto;
    padding: 10px;
`;

const BoxTitle = styled.h3`
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    min-height: 80px;
    margin: auto;
`;

const AmiiboItem = ({ amiibo, Icon, onRemove }: AmiiboProps) => { 
  

  const handleDetails = () => {
    console.log('Details button...');
  }
  
  const handleRemove = () => {
        console.log('Handling remove');
        onRemove(amiibo);
    };

    return (
        <ItemBox>
        <AmiiboImg src={amiibo.image}></AmiiboImg>
        <BoxTitle>
          {amiibo.name} ({amiibo.amiiboSeries})
        </BoxTitle>
            <ButtonBox>
            <button css={Button} onClick={handleDetails}>Details</button>
              <Icon css={IconDesign} onClick={handleRemove} />
            </ButtonBox>
              
           
        </ItemBox>
    )
}

export default AmiiboItem
 