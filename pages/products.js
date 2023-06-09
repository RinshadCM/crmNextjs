import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import axiosClient from '../config/axios';
import Product from '../components/Product';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosClient.get('products').then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Products</h1>
            <Link href="/newproduct">
                <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center">
                    New Product
                </a>
            </Link>

            <div className="overflow-x-scroll">
                <table className="table-auto shadow-md mt-10 w-full w-lg">
                    <thead className="bg-gray-800">
                        <tr className="text-white">
                            <th className="w-1/5 py-2">Name</th>
                            <th className="w-1/5 py-2">Price</th>
                            <th className="w-1/5 py-2">Available</th>
                            <th className="w-1/5 py-2">Weight</th>
                            <th className="w-1/5 py-2">Sold</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {products.map((product) => (
                            <Product key={product.id} data={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
