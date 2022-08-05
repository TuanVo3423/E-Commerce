import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export default function MainLayout({ children }) {
    // Header , Slide , slick slider , Hot product , Related Product , Footer
    // Header , Card , Sidebar , List Product , footer
    // Header , Card display info , input form , footer
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="mt-20 w-full flex flex-col">{children}</div>
            {/* body */}
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}
