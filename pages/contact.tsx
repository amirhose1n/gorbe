import PageHeader from "../src/components/pageHeader";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import classNames from "classnames";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    reply_to: string;
    name: string;
    message: string;
    subject: string;
  }>();

  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async () => {
    if (form.current) {
      await emailjs
        .sendForm(
          "service_tc9zd6g",
          "template_2r6td57",
          form.current,
          "oYFFGhc99W5ugo4ga"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setIsSent(true);
    setLoading(false);
  };

  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <div className="layout layout--center desktop:py-16 desktop:px-0 tablet:px-16 px-6 py-6">
        <PageHeader img="/images/texts/Contact.png" />
        <div
          className={classNames(
            "desktop:py-12 py-6 tablet:py-8",
            loading ? "opacity-50" : ""
          )}
        >
          {!isSent && (
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-2 desktop:w-1/2 tablet:w-2/3 w-full"
            >
              <input
                placeholder="your email address*"
                {...register("reply_to", {
                  required: {
                    message: "This feild is required!",
                    value: true,
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format!",
                  },
                })}
                className="p-2 text-md font-semibold rounded-md"
              />
              {errors.reply_to && (
                <span className="text-dark-300 font-semibold text-sm">
                  {errors.reply_to.message}
                </span>
              )}
              <input
                placeholder="name"
                defaultValue=""
                {...register("name")}
                className="p-2 text-md font-semibold rounded-md"
              />
              <input
                placeholder="subject"
                {...register("subject")}
                className="p-2 text-md font-semibold rounded-md"
              />
              <textarea
                placeholder="message"
                {...register("message", {
                  required: true,
                })}
                className="p-2 text-md font-semibold rounded-md"
              />
              {errors.message && (
                <span className="text-dark-300 font-semibold text-sm">
                  This field is required
                </span>
              )}
              <input
                type="submit"
                className={classNames(
                  "bg-white rounded-md py-2 font-semibold cursor-pointer"
                )}
              />
            </form>
          )}
          {isSent && (
            <div>
              <h1>your email has sent , thank you !!! (design lazem)</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Contact;
