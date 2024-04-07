import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AlignFooter = styled.div`
  margin-top: auto;
`;
export default function Root() {
  return (
    <>
      <Container>
        <Navbar />
        <h1>Ignore this layout. Just setting basic things up.</h1>
        <AlignFooter>
          <Footer />
        </AlignFooter>
      </Container>
    </>
  );
}
