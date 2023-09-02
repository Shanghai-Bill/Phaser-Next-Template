import React from 'react';

interface NoSSRProps {
    children: React.ReactNode;
}

const NoSSR: React.FC<NoSSRProps> = ({ children }) => {
    if (typeof window === 'undefined') {
        return null;
    }
    return children;
};

export default NoSSR;