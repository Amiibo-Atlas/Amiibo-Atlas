/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { AiOutlineRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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

const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #E60711;
    }
`;

const Text = styled.span`
    margin: 0 0.25rem;
`;

const Breadcrumb = ({ paths, currentUrl }) => {
    return (
        <BreadcrumbList>
            {paths.map((path, index) => (
                <BreadcrumbItem key={index}>
                    {index !== 0 && <AiOutlineRight />}
                    {path.url === currentUrl ? (
                        <Text>{path.name}</Text>
                    ) : (
                        <Link to={path.url}>
                            <Text>{path.name}</Text>
                        </Link>
                    )}
                </BreadcrumbItem>
            ))}
        </BreadcrumbList>
    );
};

export default Breadcrumb;