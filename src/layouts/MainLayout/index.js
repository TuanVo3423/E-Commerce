import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
export default function MainLayout({ children }) {
    // Header , Slide , slick slider , Hot product , Related Product , Footer
    // Header , Card , Sidebar , List Product , footer
    // Header , Card display info , input form , footer
    return (
        <div className="h-full w-full flex flex-col items-center overflow-x-hidden">
            <Header />
            {/* body */}
            <div className="mt-20 w-full flex flex-col">{children}</div>
            <Footer />
        </div>
    );
}
