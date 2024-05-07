import React from 'react';
import styled from '@emotion/styled';

const BreadcrumbContainer = styled.nav`
    padding: 1rem 0;
`;

const Breadcrumb = ({ paths, currentUrl }) => {
    return (
        <BreadcrumbContainer>
            {paths.map((path, index) => (
                <React.Fragment key={index}>
                    {path.url !== currentUrl ? (
                        <a href={path.url}>{path.name}</a>
                    ) : (
                        path.name
                    )}
                    {index < paths.length - 1 && ' / '}
                </React.Fragment>
            ))}
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;