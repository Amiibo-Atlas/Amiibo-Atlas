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
                        <h2>How amiibo work</h2>
                        <p>
                            Amiibo work by using NFC (Near Field Communication) technology to
                            interact with compatible devices and games. When you tap an amiibo on
                            your Nintendo Switch, Wii U, or 3DS, it unlocks special features or
                            content.
                        </p>
                    </section>
                    <section>
                        <h2>Popular amiibo</h2>
                        <p>
                            Some popular amiibo include Mario, Link from The Legend of Zelda, and
                            characters from the Super Smash Bros. series.
                        </p>
                    </section>
                    <section>
                        <h2>Benefits of using amiibo</h2>
                        <p>
                            Using amiibo can unlock in-game items, costumes, and even new levels or
                            challenges. They add an extra layer of fun and interactivity to your
                            games.
                        </p>
                    </section>
                    <section>
                        <h2>How to use amiibo</h2>
                        <p>
                            To use an amiibo, simply tap it on the designated NFC touchpoint on your
                            console or controller. Follow the on-screen instructions to enjoy the
                            new content it unlocks!
                        </p>
                    </section>
                </div>
            </MainContent>
        </Container>
    );
}
