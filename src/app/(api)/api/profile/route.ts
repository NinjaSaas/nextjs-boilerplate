import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v2 as cloudinary } from "cloudinary";

import { env } from "@/data/env/env.mjs";

// Define interfaces for expected response shapes
interface CloudinaryResponse {
  secure_url: string;
}

// Cloudinary config
cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const image = data.get("fileUpload");

    if (!image || typeof image === "string") {
      return NextResponse.json({ err: "Invalid image data" }, { status: 400 });
    }
    const fileBuffer = await image.arrayBuffer();
    const mime = image.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");
    const fileUri = `data:${mime};${encoding},${base64Data}`;

    const uploadToCloudinary = async (): Promise<CloudinaryResponse> => {
      return cloudinary.uploader.upload(fileUri, { invalidate: true });
    };

    const result = await uploadToCloudinary();
    const imageUrl = result?.secure_url;

    return NextResponse.json({ success: true, imageUrl }, { status: 200 });
  } catch (error) {
    console.error("#LOG: Server error", error);
    return NextResponse.json({ err: "Internal Server Error" }, { status: 500 });
  }
}
