import styled from "@emotion/styled";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const FooterUL = styled.ul`
  background-color: #978097;
  display: flex;
  flex-direction: column;
  margin: 0;
  @media (min-width: 587px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FooterLi = styled.li`
  list-style-type: none;
  color: white;
  padding: 0.5rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterUL>
        <FooterLi>
          © 2024 Ariel Zeto, Ashley Pak, Taesok Kwon, and Joshua Kim. This web
          app utilizes the Amiibo API, an independent and unofficial resource
          created by a third party. Nintendo, and the 'Amiibo' figurines are in
          no way affiliated with this web app.
        </FooterLi>
      </FooterUL>
    </FooterContainer>
  );
}

export default Footer;
