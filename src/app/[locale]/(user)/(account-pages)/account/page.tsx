import React, { use } from "react";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { v2 as cloudinary } from "cloudinary";

import { uploadImage } from "@/server/actions/profile";
import { getUserProfile } from "@/server/handlers/user/getUserProfile";
import { env } from "@/data/env/env.mjs";
import PersonalForm from "@/shared/Account/PersonalForm";

//export const runtime = "edge";

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

function AccountPage() {
  const userAuth = use(getCurrentUser());
  const user = userAuth && use(getUserProfile(userAuth.id));

  return (
    <div>
      {/* HEADING */}

      <PersonalForm user={user} uploader={uploadImage} />
    </div>
  );
}

export default AccountPage;
