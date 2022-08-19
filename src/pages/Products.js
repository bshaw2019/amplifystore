import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ProductContext } from '../context/products';
import beatImage from "../assets/beat.jpg";


const Products = () => {
    const { products } = useContext(ProductContext);

    if (!products.length) {
        return <h3>No Beats Available</h3>
    }

    return (
        // <section className="products">
        //     {products.map(({ image: image, id, title }) => (
        //         <article key={id} className="product">
        //             <div className="product-image">
        //                 <img src={image} alt={title} />
        //             </div>
        //             <Link to={`products/${id}`} className="btn product-link">details</Link>
        //         </article>
        //     ))}
        // </section>

        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link to={`products/${product.id}`}>
                        <div key={product.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={beatImage}
                                    alt={product.title}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        {/*<a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>*/}
                                        <Link to={`products/${product.id}`} className="text-sm text-gray-700">details</Link>
                                        {product.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Products
