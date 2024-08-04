import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

import { env } from "@/data/env/env.mjs";

import NewsletterForm from "./NewsletterForm";

export const MAILCHIMP_URL = env.NEXT_PUBLIC_MAILCHIMP_URL || "";

const NewsletterSubscribe = () => {
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData: EmailFormFields) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
