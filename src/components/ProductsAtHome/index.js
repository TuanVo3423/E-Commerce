import ProductItem from './ProductItem';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
export default function ProductsAtHome({ data }) {
    const { dataProduct, title, description, Image } = data;
    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'string',
                    duration: 1,
                    bounce: 0.3,
                },
            });
        }
        if (!inView) {
            animation.start({
                x: '-100vw',
            });
        }
    }, [inView]);
    return (
        <div
            ref={ref}
            className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
            style={{ backgroundImage: Image && `url(${Image})`, color: Image || 'black' }}
        >
            <div className=" p-6 md:p-20 md:pt-12">
                <div className="text-center mb-10">
                    <p className="font-bold text-2xl mb-3">{title}</p>
                    <p>{description}</p>
                </div>
                <motion.div
                    className="flex flex-row md:justify-evenly justify-center flex-wrap items-center"
                    initial={{ x: '-1000' }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
                >
                    {dataProduct.map((item) => (
                        <ProductItem key={item.id} data={item} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
