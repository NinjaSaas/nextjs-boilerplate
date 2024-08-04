import React, { FC } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

import Avatar from "@/components/Avatar";

export interface CommentListingProps {
  className?: string;
  name: string;
  date: string;
  comment: string;
  starPoint: number;
}

const CommentListing: FC<CommentListingProps> = ({
  className = "",
  name,
  date,
  comment,
}) => {
  return (
    <div
      className={`nc-CommentListing flex space-x-4 ${className}`}
      data-nc-id="CommentListing"
    >
      <div className="pt-0.5">
        <Avatar
          sizeClass="h-10 w-10 text-lg"
          radius="rounded-full"
          userName={name}
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between space-x-3">
          <div className="flex flex-col">
            <div className="text-sm font-semibold">
              <span>{name}</span>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {date}
            </span>
          </div>
          <div className="flex text-yellow-500">
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
          </div>
        </div>
        <span className="block mt-3 text-sm md:text-base  text-neutral-6000 dark:text-neutral-300">
          {comment}
        </span>
      </div>
    </div>
  );
};

export default CommentListing;
