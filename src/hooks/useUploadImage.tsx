"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// to be updated using s3
//import { trpc } from "../providers/trpcProvider";

/**
 * Only admin user can use this hook
 */

const useUploadImage = (
  id: string = uuidv4() + new Date().toISOString().split(":").join(),
) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
    id,
    file,
    setFile,
  };
};

export default useUploadImage;
