import { useRouteError } from "react-router-dom";
import styled from "@emotion/styled";
import ghost from "../../assets/boo.png";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-grow: 1;
`;

export default function ErrorPage() {
    const error = useRouteError() as { status: string, statusText: string } | null;
    return (
        <ErrorContainer>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.status} {error?.statusText}</i>
            </p>
            <img src={ghost} style={{width: '150px', height: '150px' }} />
        </ErrorContainer>
    );
}