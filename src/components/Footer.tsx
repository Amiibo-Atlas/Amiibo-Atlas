import styled from '@emotion/styled';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    /* padding: 20px; */
    min-height: 150px;
    @media (min-width: 640px) {
        /* padding: 24px; */
    }
`;

const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    @media (min-width: 640px) {
        flex-direction: row;
        justify-content: center;
        gap: 12px;
    }
`;

const FooterLink = styled.a`
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #4b5563;
    &:hover {
        color: #1f2937;
    }
`;

const FooterText = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #6b7280;
`;

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Amiibos Page', href: '/amiibos' },
    { name: 'Login', href: '/login' },
];

function Footer() {
    return (
        <FooterContainer>
            <FooterNav aria-label="Footer">
                {navigation.map((item) => (
                    <FooterLink key={item.name} href={item.href}>
                        {item.name}
                    </FooterLink>
                ))}
            </FooterNav>
            <FooterText>&copy; 2024 Amiibo Atlas. All rights reserved.</FooterText>
        </FooterContainer>
    );
}

export default Footer;
