"use server";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

import { env } from "@/data/env/env.mjs";

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads an image using the provided form data.
 *
 * @param {FormData} form - the form data containing the image to be uploaded
 * @return {UploadApiResponse} the response containing the result of the image upload
 */
export async function uploadImage(form: FormData) {
  const file = form.get("fileUpload") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["nextjs-server-actions-upload-sneakers"],
          folder: "profile-images",
        },
        function (error, result) {
          if (error) {
            reject(new Error(`Upload failed: ${error.message}`));
          }
          resolve(result);
        },
      )
      .end(buffer);
  });

  //revalidatePath("/");
  return result as UploadApiResponse;
}
