import ProductItem from './ProductItem';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { inViewScaleParentShow } from '../../utils/types';
export default function ProductsAtHome({ data }) {
    const { inView, ref } = useInView({
        threshold: 0.2,
    });
    const { dataProduct, title, description, Image } = data;

    return (
        <div
            className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
            style={{ backgroundImage: Image && `url(${Image})`, color: Image || 'black' }}
        >
            <div className=" p-6 lg:p-20 lg:pt-12 md:px-4 md:py-20">
                <div className="text-center mb-5">
                    <p className="font-bold text-2xl mb-3">{title}</p>
                    <div className="w-full h-1 flex flex-row justify-center">
                        <svg className="h-1 w-32 text-green-600" fill="currentColor">
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>
                    <p className="mt-2">{description}</p>
                </div>
                <motion.div
                    ref={ref}
                    className="flex flex-row md:justify-evenly justify-center flex-wrap items-center"
                    variants={inViewScaleParentShow}
                    initial={'hidden'}
                    animate={inView && 'visible'}
                    viewport={{ once: true }}
                >
                    {dataProduct.map((item) => (
                        <ProductItem key={item.id} data={item} isAtHome />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
