import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import beatImage from "../assets/beat.jpg";
import {createProduct} from "../api/mutations";
import config from "../aws-exports";
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import { v4 as uuidv4 } from 'uuid';
import {ProductContext} from "../context/products";


const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const MyBeats = () => {
    const { products } = useContext(ProductContext);

    const [showModal, setShowModal] = React.useState(false);
    const [image, setImage] = useState(null);
    const [beat, setBeat] = useState(null);
    let [productDetails, setProductDetails] = useState({ title: "", description: "", image: "", beat: "", price: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await Amplify.Auth.currentAuthenticatedUser({});
        try {
            if (!productDetails.title || !productDetails.price) return
            productDetails = { ...productDetails, price: parseFloat(productDetails.price), producerEmail: user.attributes.email}
            await API.graphql(graphqlOperation(createProduct, { input: productDetails }))
            setProductDetails({ title: "", description: "", image: "", beat: "", price: "" })
            setShowModal(false);
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `covers/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level.
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setProductDetails({ ...productDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    const handleBeatUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `beats/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level.
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const beat = await Storage.get(key, { level: 'public' })
            setBeat(beat);
            setProductDetails({ ...productDetails, beat: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">

            <div className="sm:flex items-center justify-between">
                <div className="flex items-center">
                </div>
                <button onClick={() => setShowModal(true)}
                        className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">Add Beat</p>
                </button>
            </div>


            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link to={`products/${product.id}`}>
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={beatImage}
                                        alt= {product.title}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.title}
                                            </a>
                                        </h3>
                                        {/*<p className="mt-1 text-sm text-gray-500">{product.description}</p>*/}
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {showModal ? (
                <>
                    {/*<div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">*/}
                    <div className="w-full h-full bg-black bg-opacity-90 top-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed sticky-0 inset-0 z-50 outline-none focus:outline-none">
                        <div className="md:grid md:grid-cols-3 md:gap-6">


                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="title"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Title
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">

                                                        <input
                                                            type="text"
                                                            name="title"
                                                            id="title"
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                            placeholder="Type the title"
                                                            onChange={(e) => setProductDetails({ ...productDetails, title: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                    Description
                                                </label>
                                                <div className="mt-1">
                      <textarea
                          id="description"
                          name="description"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Type the description of the beat"
                          onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                          required
                          defaultValue={''}
                      />
                                                </div>

                                            </div>


                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="price"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Price
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">

                                                        <input
                                                            type="text"
                                                            name="price"
                                                            id="price"
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                            placeholder="Type the price"
                                                            onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })}
                                                            required                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3 w-96">
                                                <label htmlFor="beat" className="block text-sm font-medium text-gray-700">Audio File</label>
                                                <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border
                                                border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                       type="file" id="beat"
                                                       onChange={(e) => handleBeatUpload(e)} />

                                            </div>


                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                {image ?  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                                        <img
                                                            src={image}
                                                            alt= "uploaded image"
                                                            className="w-30 h-30 object-center object-cover lg:w-full lg:h-full"
                                                        />
                                                    </div> :
                                                    <div className="space-y-1 text-center">
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>

                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload"
                                                                       type="file"
                                                                       className="sr-only"
                                                                       onChange={(e) => handleImageUpload(e)} />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                        }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default MyBeats;

