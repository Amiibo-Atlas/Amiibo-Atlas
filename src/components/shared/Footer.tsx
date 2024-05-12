import styled from '@emotion/styled';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: white;
    padding-bottom: 20px;
    min-height: 100px; 
`;

const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media (min-width: 640px) {
        flex-direction: row;
        justify-content: center;
        gap: 12px;
    }
`;

const Link = styled.a`
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #4B5563;
    &:hover {
        color: #1F2937;
    }
`;

const Text = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #6B7280;
`;

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Amiibos', href: '/amiibos' },
    { name: 'Login', href: '/login'},
]

function Footer() {
    return (
        <FooterContainer>
            <FooterNav>
                {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </FooterNav>
            <Text>
                &copy; 2024 Amiibo Atlas. All rights reserved.
            </Text>
        </FooterContainer>
    );
}

export default Footer;