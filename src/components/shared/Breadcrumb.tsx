import styled from '@emotion/styled';
import { AiOutlineRight } from 'react-icons/ai';

const BreadcrumbList = styled.ol`
    display: flex;
    align-items: center;
    margin-left: 6rem;
    padding: 1rem 0;
`;

const BreadcrumbItem = styled.li`
    display: flex;
    align-items: center;
`;

const Link = styled.a`
    margin: 0 0.25rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
    &:hover {
        color: #E60711;
    }
`;

const Text = styled.span`
    margin-left: 0.25rem;
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
                        <Link href={path.url}>{path.name}</Link>
                    )}
                </BreadcrumbItem>
            ))}
        </BreadcrumbList>
    );
};

export default Breadcrumb;