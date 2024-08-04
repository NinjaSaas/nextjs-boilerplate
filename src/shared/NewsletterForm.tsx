import { KeyboardEvent, useState } from "react";
import DOMPurify from "dompurify";

import Loading from "./Loading";

const sanitize = (content: any) => {
  return process.browser ? DOMPurify.sanitize(content) : content;
};

const NewsletterForm = ({ status, message, onValidated }: any) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError("");

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.includes("@") && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    setError("");
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: string): null | any => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-100 z-10 mx-10 lg:max-w-xl lg:mx-auto">
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          onKeyUp={(event) => handleInputKeyEvent(event)}
          type="email"
          placeholder="contact@ninjasaas.com"
          className="w-100 md:w-[33rem] text-lg md:text-xl font-light text-gray-900 placeholder-gray-500 py-5 pl-5 pr-36 lg:pr-44 rounded-xl border-primary-6000 focus:border-primary-900 focus:ring-primary-50"
        />
        <button
          onClick={handleFormSubmit}
          className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-base md:text-lg font-semibold bg-primary-6000 text-secondary-100 rounded-xl transition ease-in-out duration-500 hover:bg-primary-900 hover:text-secondary-50"
        >
          Notify me
        </button>
      </div>
      <div className="flex">
        {"sending" === status ? (
          <Loading
            showSpinner
            message="Sending..."
            contentColorClass="text-secondary-50"
            hasVisibilityToggle={false}
          />
        ) : null}
        {"error" === status || error ? (
          <div
            className="text-secondary-900 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-primary-6000 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
