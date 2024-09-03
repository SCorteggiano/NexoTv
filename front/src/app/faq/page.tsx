/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const Faq = () => {
  return (
    <div id="wholeContainer" className="h-screen">
      <div id="faqTitleContainer" className="m-12 text-center">
        <h1 className="text-6xl font-bold">Frequently Asked Questions</h1>
        <p className="text-2xl m-2">Any questions? We got the answers.</p>
      </div>

      <div id="faqQAcontainer" className="m-6 space-y-8">
        <div className="border-b pb-4">
          <p className="text-4xl font-semibold">What is NexoTV?</p>
          <p className="text-lg mt-2">
            NexoTV is an online entertainment platform that offers a wide
            selection of movies and series for all tastes. From the latest
            releases to cinema classics, NexoTV lets you enjoy high-quality
            content anytime, anywhere. With both free and premium subscription
            options, you can explore and enjoy unlimited content on any device,
            whether it's your phone, tablet, computer, or smart TV.
          </p>
        </div>

        <div className="border-b pb-4">
          <p className="text-4xl font-semibold">What are the benefits of the Premium plan?</p>
          <p className="text-lg mt-2">
            By subscribing to the NexoTV Premium plan, you gain unlimited access
            to a wider variety of content, including exclusive movies and series
            that are not available with the free subscription. Additionally,
            you'll enjoy an ad-free experience and early access to new releases.
          </p>
        </div>

        <div className="border-b pb-4">
          <p className="text-4xl font-semibold">How can I cancel my subscription?</p>
          <p className="text-lg mt-2">
            You can cancel your subscription at any time from your NexoTV
            dashboard. Simply log in to your account, go to the "My Account" or
            "Account Settings" section, and click on the "Cancel Subscription"
            option. Make sure your subscription is active before initiating this
            process. Once canceled, you will continue to have access to the
            Premium plan benefits until the end of your current billing cycle,
            with no further charges.
          </p>
        </div>

        <div className="pb-4">
          <p className="text-4xl font-semibold">
            I need more help, how can I contact support?
          </p>
          <p className="text-lg mt-2">
            If you need additional assistance or have any questions, you can
            contact our support team in several ways. You can use the contact
            form available in the{" "}
            <Link href="/help">
              <p className="text-blue-500 hover:underline inline">Help</p>
            </Link>{" "}
            section on our website to send your inquiry directly. You can also
            email us at{" "}
            {/* Cambiar Mail */}
            <a
              href="mailto:nexotv@mail.com"
              className="text-blue-500 hover:underline"
            >
              nexotv@mail.com
            </a>
            , and one of our representatives will get back to you as soon as
            possible. Our support team is available to help with any issues or
            questions you may have about NexoTV.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
