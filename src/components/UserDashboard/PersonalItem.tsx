import { RiInformation2Fill } from 'react-icons/ri';
import styled from '@emotion/styled';
import { Amiibo } from '../../types/Amiibo';

interface AmiiboProps {
    amiibo: Amiibo;
    Icon: React.ElementType;
}

const WishBox = styled.div`
    position: relative;
    border: 2px solid #646cff;
    border-radius: 25px;
    gap: 10px;
    display: flex;
    justify-content: left;
    align-items: left;
    margin: 15px;
    padding: 1rem;
    height: 55px;
    width: 600px;
    font-size: 15px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: #1a1a1a;
`;

const AmiiboImg = styled.img`
    width: auto;
    height: auto;
`;

const DetailsButton = styled.button`
    &:hover {
        border-color: #646cff;
    }
    color: #646cff;
    cursor: pointer;
    transition: border-color 0.25s;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: white;
    top: 5px;
    right: 70px;
    position: absolute;
`;

const RemoveButton = styled.button`
    &:hover {
        border-color: #646cff;
    }
    color: #646cff;
    cursor: pointer;
    transition: border-color 0.25s;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: white;
    right: 10px;
    top: 5px;
    position: absolute;
`;

const AmiiboItem = ({ amiibo, Icon }: AmiiboProps) => {
    // const removeItem = async (wish: Amiibo) => {
    //     console.log('prev wishlist: ' + JSON.stringify(wish));
    // };

    return (
        <WishBox>
            <AmiiboImg src={amiibo.image}></AmiiboImg>
            <h3>
                {amiibo.gameSeries} - {amiibo.name}
            </h3>
            <div className="wishlist-details-button">
                <a href="">
                    <DetailsButton>
                        <RiInformation2Fill />
                    </DetailsButton>
                </a>
            </div>
            <div className="wishlist-add-button">
                <RemoveButton id="remove-button">{Icon && <Icon></Icon>}</RemoveButton>
            </div>
        </WishBox>
    );
};

export default AmiiboItem;
