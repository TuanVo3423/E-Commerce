import ProductItem from './ProductItem';
export default function ProductsAtHome({ data }) {
    const { dataProduct, title, description, Image } = data;
    return (
        <div
            className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
            style={{ backgroundImage: Image && `url(${Image})`, color: Image || 'black' }}
        >
            <div className=" p-6 md:p-20 md:pt-12">
                <div className="text-center mb-10">
                    <p className="font-bold text-2xl mb-3">{title}</p>
                    <p>{description}</p>
                </div>
                <div className="flex flex-row md:justify-evenly justify-center flex-wrap items-center">
                    {dataProduct.map((item) => (
                        <ProductItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
