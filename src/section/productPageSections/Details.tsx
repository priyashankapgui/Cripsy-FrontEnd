import React from 'react';
import RatingStars from "@/components/Product/RatingStar";
import QuantityInput from "@/components/Product/QuantityInput";
import Button from "@/components/Button/CustomButton";


export interface DetailsType {
    name: string,
    price: number,
    rating: number,
    ratingCount: number,
    totalReviewsCount: number,
    stock: number,
}

const ProductDetails: React.FC<DetailsType> = ({ name, price, rating, ratingCount, totalReviewsCount, stock}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const quantity = ((e.target as HTMLFormElement).elements.namedItem("quantity") as HTMLInputElement)?.value;
        const submitter = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement)?.value;

        if (submitter === "buy") {
            console.log("Buy Now clicked", quantity);
        } else if (submitter === "addToCart") {
            console.log("Add to Cart clicked", quantity);
        }
    };

    return (
        <div className="flex-[100%] md:flex-[45%] pr-5 ml-3 lg:ml-0">
            <h1 className="text-white font-medium mt-10 md:mt-0 leading-none">{name}</h1>
            <div className="flex items-center mt-5">
                <h3 className="text-white font-extralight tracking-wider mr-3">{rating}</h3>
                <RatingStars value={rating} />
            </div>
            <p className="text-neutral-400 font-light mb-10">{`${ratingCount} Ratings | ${totalReviewsCount} Reviews`}</p>
            <h2 className="text-carnation-500 tracking-wider mb-10">{`Rs ${price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</h2>
            <form onSubmit={handleSubmit}>
                <p className="text-neutral-400 font-normal mb-1">Quantity:</p>
                <QuantityInput max={stock}/>
                <div className="mt-5">
                    <span className="text-neutral-400 font-normal">Availability:</span>
                    <span className="text-white font-normal ml-2">{stock}</span>
                </div>
                <div className="flex items-center mt-5">
                    <Button name="action" value="buy" buttonLabel="Buy Now" variant="primary" buttonClassName="px-8 mr-6"></Button>
                    <Button name="action" value="addToCart" buttonLabel="Add to Cart" variant="outline" buttonClassName="px-5"></Button>
                </div>
            </form>
        </div>
    );
};

export default ProductDetails;