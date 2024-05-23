/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const BreadcrumbList = styled.ol`
    display: flex;
    align-items: center;
    margin: 1rem 8rem;
    padding: 1rem 0;
`;

const BreadcrumbItem = styled.li`
    display: flex;
    align-items: center;
`;

const linkStyle = css`
    margin: 0 0.25rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
        color: #E60711;
    }
`;

const Text = styled.span`
    margin-left: 0.25rem;
`;

const Breadcrumb = ({ paths, currentUrl }) => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    return (
        <BreadcrumbList>
            {paths.map((path, index) => (
                <BreadcrumbItem key={index}>
                    {index !== 0 && <AiOutlineRight />}
                    {path.url === currentUrl ? (
                        <Text>{path.name}</Text>
                    ) : (
                        <div css={linkStyle} onClick={() => navigateTo(path.url)}>{path.name}</div>
                    )}
                </BreadcrumbItem>
            ))}
        </BreadcrumbList>
    );
};

export default Breadcrumb;