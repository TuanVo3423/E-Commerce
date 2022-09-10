export const Logo = ({ className }) => {
    return (
        <img
            className={className}
            alt="Logo"
            src="data:image/png;base64,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"
        ></img>
    );
};
export const PrevIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <polyline
                points="160 208 80 128 160 48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>
        </svg>
    );
};
export const NextvIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <polyline
                points="96 48 176 128 96 208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>
        </svg>
    );
};
export const PrevIconBanner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <polyline
                points="160 208 80 128 160 48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>
        </svg>
    );
};
export const NextIconBanner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <polyline
                points="96 48 176 128 96 208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>
        </svg>
    );
};
export const Banner_1 = ({ className }) => {
    return (
        <img
            className={className}
            alt="Banner"
            src="https://tuanvo3423.github.io/LAVIE-e-commerce/assets/img/banner-2.jpeg"
        ></img>
    );
};
export const Banner_2 = ({ className }) => {
    return <img className={className} alt="Banner" src="https://bwd2022.vercel.app/assets/banner-3.jpeg"></img>;
};
export const BannerDonate_1 = ({ className }) => {
    return (
        <img
            className={className}
            src="http://charity-is-hope-html.themerex.net/images/slider_1_3.jpg"
            alt="Banner1"
        ></img>
    );
};
export const sliderDonate_2 = ({ className }) => {
    return (
        <img
            className={className}
            src="http://charity-is-hope-html.themerex.net/images/slider_1_2.jpg"
            alt="Banner2"
        ></img>
    );
};
export const RiceStraws =
    'https://firebasestorage.googleapis.com/v0/b/bwdd-3dc88.appspot.com/o/images%2FOng-hut-bot-gao-0?alt=media&token=5f37b297-a09a-4001-b53f-9e5340784f00';

// donation banner
export const Banner_Donate_1 = ({ className }) => {
    return <img className={className} alt="Banner1" src="https://bwd2022.vercel.app/assets/donate-1.jpg"></img>;
};
export const Banner_Donate_2 = ({ className }) => {
    return <img className={className} alt="Banner1" src="https://bwd2022.vercel.app/assets/donate-3.webp"></img>;
};
// donate card
export const donate_card_1 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#37b24d" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <line
                x1="160"
                y1="96"
                x2="40"
                y2="216"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></line>
            <path
                d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></path>
        </svg>
    );
};
export const donate_card_2 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#37b24d" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <path
                d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></path>
            <path
                d="M163.1,152A35.8,35.8,0,0,1,136,179.1"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></path>
        </svg>
    );
};
export const donate_card_3 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#37b24d" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <polyline
                points="176.2 99.7 224.2 99.7 224.2 51.7"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></polyline>
            <path
                d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></path>
            <polyline
                points="79.8 156.3 31.8 156.3 31.8 204.3"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></polyline>
            <path
                d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
                fill="none"
                stroke="#37b24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            ></path>
        </svg>
    );
};
