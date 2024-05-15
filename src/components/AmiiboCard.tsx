import { useDispatch } from 'react-redux';
import { Amiibo } from '../types/Amiibo';
import { Link } from 'react-router-dom';
import { setSelectedAmiibo } from '../features/amiibo/amiiboSlice';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    @media (min-width: 587px) {
        flex-direction: row;
    }
`;

const Card = styled.div`
    display: flex;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 7px;
    flex-wrap: wrap;
    align-self: center;
    width: 250px;
    height: 250px;
    overflow: hidden;
    margin: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const CardImg = styled.img`
    display: flex;
    width: 100%;
    height: auto;
`;

const CardInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: red;
    text-decoration: none;
`;

const StyleReactRouterLink = styled(Link)`
    text-decoration: none;
`;

interface Props {
    amiiboProps: Amiibo[];
}

export default function AmiiboCard({ amiiboProps }: Props) {
    const dispatch = useDispatch();

    const handleAmiiboClick = (amiibo: Amiibo) => {
        dispatch(setSelectedAmiibo(amiibo));
    };

    return (
        <Wrapper>
            {amiiboProps.map((amiibo: Amiibo) => (
                <StyleReactRouterLink
                    to={`/amiibos/${amiibo.tail}-${amiibo.head}`}
                    key={`${amiibo.gameSeries}-${amiibo.name}-${amiibo.character}-${amiibo.tail}`}
                    onClick={() => handleAmiiboClick(amiibo)}
                >
                    <Card>
                        <CardInfo>
                            <p>{amiibo.name}</p>
                        </CardInfo>
                        <InnerCard>
                            <CardImg src={amiibo.image} />
                        </InnerCard>
                    </Card>
                </StyleReactRouterLink>
            ))}
        </Wrapper>
    );
}
