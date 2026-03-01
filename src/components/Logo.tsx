import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <Image quality={100} src="/logo.svg" width={1000} height={1000} alt='logo' className="dark:invert" />
    );
};

export default Logo;
