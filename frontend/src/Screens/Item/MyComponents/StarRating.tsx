import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
   value?: number;
   onChange?: (value: number) => void;
}

export default function StarRating({ value = 1, onChange }: StarRatingProps) {
   const [hovered, setHovered] = useState<number | null>(null);

   const handleClick = (index: number) => {
      onChange?.(index);
   };

   return (
      <div className="flex gap-1 mt-2">
         {Array.from({ length: 5 }, (_, i) => {
            const index = i + 1;
            const isActive =
               hovered !== null ? index <= hovered : index <= value;
            return (
               <Star
                  key={index}
                  className={`w-6 h-6 cursor-pointer transition-colors ${
                     isActive
                        ? "fill-[#FFD700] text-[#FFD700]"
                        : "fill-primaryLightGrey text-primaryLightGrey"
                  }`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleClick(index)}
               />
            );
         })}
      </div>
   );
}
