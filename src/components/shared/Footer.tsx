import styled from '@emotion/styled';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: white;
    padding-bottom: 20px;
    min-height: 100px; 
`;

const Text = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #6B7280;
`;


function Footer() {
    return (
        <FooterContainer>
            <Text>
                &copy; 2024 Amiibo Atlas. All rights reserved.
            </Text>
        </FooterContainer>
    );
}

export default Footer;