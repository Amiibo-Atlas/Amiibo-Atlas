import styled from '@emotion/styled';
import { useAppDispatch } from '../redux/hooks';
import { login, googleSignInAndUserSetup } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import amiiboLogo from '../assets/amiibo.png';

const Container = styled.div`
    position: fixed;
    display: flex;
    inset: 0;
    align-items: center;
    justify-content: center;
    background-color: gray;
`;

const InnerContainer = styled.div`
    width: 100%;
    max-width: 20rem;
`;

const Card = styled.div`
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    padding: 2rem 2rem 2rem 2rem;
    margin-bottom: 1rem;
`;

const Logo = styled.img`
    display: block;
    margin: 2.5rem auto 0 auto;
    height: 2.5rem;
    width: auto;
`;

const Title = styled.h2`
    margin-top: 2.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2.25rem;
    color: black;
`;

const ButtonContainer = styled.div`
    margin-top: 2.5rem;
`;

const Button = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: indigo;
    padding: 0.75rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:hover {
        background-color: darkblue;
    }
`;

const Text = styled.p`
    margin-top: 2.5rem;
    text-align: center;
    font-size: 0.875rem;
    color: gray;
`;

const Link = styled.a`
    font-weight: 600;
    line-height: 1.5rem;
    color: indigo;
    &:hover {
        color: darkblue;
    }
`;

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginWithGoogle = () => {
        googleSignInAndUserSetup().then(
            (userId) => {
                if(userId) {
                    dispatch(login(userId));
                    navigate('/account');
                }
            }
        )
    }

    return (
        <Container>
            <InnerContainer>
                <Card>
                    <Logo src={amiiboLogo} />
                    <Title>Amiibo Atlas</Title>
                    <ButtonContainer>
                        <Button onClick={loginWithGoogle}>Sign in with Google</Button>
                        <Text>
                            <Link href="/">Cancel</Link>
                        </Text>
                    </ButtonContainer>
                </Card>
            </InnerContainer>
        </Container>
    );
};

export default Login;