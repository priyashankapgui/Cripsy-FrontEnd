"use client";
import React, {useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";


const ProductImgUploader: React.FC = () => {
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const newImages = Array.from(event.target.files).map((file) =>
            URL.createObjectURL(file)
        );
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    return (
        <div className="p-1">
            <h2 className="text-2xl mb-4">Upload Images</h2>
            <div className="rounded-lg shadow-lg w-full h-[22rem] p-3 mb-4">
                {images.length > 0 ? (
                    <img
                        src={images[0]}
                        alt="Uploaded Preview"
                        className="w-full h-80 object-cover rounded-lg"
                    />
                ) : (
                    <div className="w-full h-80 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">No Image Selected</p>
                    </div>
                )}
            </div>
            <div className="flex space-x-4">
                {images.map((image, index) => (
                    <div key={index} className="w-20 h-20 border-2 border-gray-200 rounded-lg overflow-hidden">
                        <img src={image} alt={`Uploaded ${index}`} className="object-cover w-full h-full" />
                    </div>
                ))}
                <label className="w-20 h-20 border-2 border-dashed border-[#FF5757] rounded-lg flex items-center justify-center cursor-pointer">
                    <AiOutlinePlus size={24} className="text-[#FF5757]" />
                    <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                        accept="image/*"
                    />
                </label>
            </div>
        </div>
    );
};

export default ProductImgUploader;
