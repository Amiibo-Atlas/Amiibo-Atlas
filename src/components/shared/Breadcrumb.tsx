import styled from '@emotion/styled';
import { AiOutlineRight } from 'react-icons/ai';

const BreadcrumbNav = styled.nav`
    display: flex;
    aria-label: 'Breadcrumb';
`;

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

const BreadcrumbLink = styled.a`
    margin: 0 0.25rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
    &:hover {
        color: #E60711;
    }
`;

const BreadcrumbText = styled.span`
    margin-left: 0.25rem;
`;

const Breadcrumb = ({ paths, currentUrl }) => {
    return (
        <BreadcrumbNav>
            <BreadcrumbList>
                {paths.map((path, index) => (
                    <BreadcrumbItem key={index}>
                        {index !== 0 && <AiOutlineRight aria-hidden="true" />}
                        {path.url === currentUrl ? (
                            <BreadcrumbText>{path.name}</BreadcrumbText>
                        ) : (
                            <BreadcrumbLink href={path.url}>{path.name}</BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </BreadcrumbNav>
    );
};

export default Breadcrumb;