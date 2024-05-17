import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const MainContent = styled.div`
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 7px;
    background-color: white;
    transition: 0.3s ease;
    box-shadow: 2px 5px rgba(0, 0, 0, 0.15);
`;

const Heading = styled.h1`
    text-align: center;
    background: -webkit-linear-gradient(#ff0000, #c55959);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default function AboutAmiibo() {
    return (
        <Container>
            <MainContent>
                <div>
                    <Heading>What are amiibo?</Heading>
                    <section>
                        <h2>Introduction to amiibo</h2>
                        <p>
                            Amiibo are figurines and cards that can be utilized within various
                            Nintendo games. The first set of Amiibo were initially released in late
                            November, 2014. To this day, Nintendo are still manufacturing Amiibo.
                            Releases for Amiibo differ based on their utilization, and some can be
                            used for multiple games.
                        </p>
                    </section>
                    <section>
                        <h2>Types of Amiibo</h2>
                        <p>
                            There exist many Amiibo, differing based on the series in which the
                            character(s) originate from. Considering that Amiibo stem from Nintendo,
                            the majority of the figurines and cards are solely based on popular
                            Nintendo properties, such as Mario, The Legend of Zelda, and Animal
                            Crossing. However, there are also quite a few third party Amiibo, such
                            as 'Solaire' from Dark Souls, a non-Nintendo property.
                        </p>
                    </section>
                    <section>
                        <h2>How does Amiibo work?</h2>
                        <p>
                            Amiibo utilize Near Field Communication (NFC) in order to interact with
                            compatible Nintendo hardware and software. The supported hardware
                            includes Nintendo Switch, 3DS, and WiiU. In order to get started with
                            using Amiibo, you place the figurine or card onto the hardware (where
                            the NFC hardware is present). By doing so, a user may unlock unique
                            features, content, or exclusives within their games.
                        </p>
                    </section>

                    <section>
                        <h2>Benefits of using amiibo</h2>
                        <p>
                            Utilizing Amiibo allows the user to unlock exclusive in-game content,
                            such as costumes, levels, challenges, and various other features.
                        </p>
                    </section>
                </div>
            </MainContent>
        </Container>
    );
}
