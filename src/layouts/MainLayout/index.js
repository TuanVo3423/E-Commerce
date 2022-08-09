import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { SwitchPage } from '../../components/ScreenPlay';
import Footer from '../components/footer';
export default function MainLayout({ children, path }) {
    const [isLoading, setIsLoading] = useState(false);
    const [firstTime, setFirstTime] = useState(0);
    useEffect(() => {
        if (firstTime === 0) {
            setFirstTime((pre) => pre + 1);
            return;
        } else {
            setIsLoading(true);
            const time = setTimeout(() => {
                setIsLoading(false);
                return clearTimeout(time);
            }, 3000);
        }
    }, [path]);

    return (
        <div className="h-full w-full flex flex-col items-center overflow-x-hidden">
            <Header path={path} />
            {/* body */}
            {isLoading && <SwitchPage />}
            {!isLoading && <div className="mt-20 w-full flex flex-col">{children}</div>}

            <Footer />
        </div>
    );
}
