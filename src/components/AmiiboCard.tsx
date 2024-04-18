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
    border: 1px solid grey;
    border-radius: 7px;
    flex-wrap: wrap;
    align-self: center;
    width: 250px;
    height: 250px;
    overflow: hidden;
    margin: 0.5rem;
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
    border: 2px solid grey;
    width: 100%;
`;

// Function Component that is modular and can take data based on amiibo data from the API it is sent.
export default function AmiiboCard({ data }) {
    return (
        <Wrapper>
            {data?.map((amiibo) => (
                <Card key={`${amiibo.gameSeries}-${amiibo.name}}`}>
                    <CardInfo>
                        <p>{amiibo.name}</p>
                    </CardInfo>
                    <InnerCard>
                        <CardImg src={amiibo.image} />
                    </InnerCard>
                </Card>
            ))}
        </Wrapper>
    );
}
