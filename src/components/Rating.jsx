import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Rating = ({ maxRating = 5 }) => {
    const [rating, setRating] = useState(0);
    const handleRating = (i) => {
        setRating(i + 1);
    };
    return (
        <div className="flex items-center">
            {Array.from({ length: maxRating }, (_, i) => {
                return i < rating ? (
                    <FaStar
                        onClick={() => handleRating(i)}
                        className="text-accent"
                        key={i}
                        size={20}
                    />
                ) : (
                    <CiStar
                        onClick={() => handleRating(i)}
                        className="text-accent"
                        key={i}
                        size={20}
                    />
                );
            })}
        </div>
    );
};

export default Rating;
