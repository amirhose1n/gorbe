import emailjs from "@emailjs/browser";
import classNames from "classnames";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../src/components/pageHeader";
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
    console.log({ form });
    if (form.current) {
      setLoading(true);
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

  console.log({ loading });

  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <div className="layout layout--center">
        <PageHeader width={200} height={50} img="/images/Contact.png" />
        <div
          className={classNames("py-6 md:py-24", loading ? "opacity-50" : "")}
        >
          {!isSent && (
            <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
              <Image
                src="/images/SendingMessage.png"
                width={340}
                height={300}
                alt="message"
              />
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
                <button
                  type="submit"
                  className="bg-white rounded-md py-2 flex items-center justify-center font-semibold cursor-pointer"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    "Send it!"
                  )}
                </button>
              </form>
            </div>
          )}
          {isSent && (
            <div className="flex items-center justify-between md:flex-row flex-col gap-8">
              <div className="w-auto">
                <h1 className="whitespace-wrap md:text-6xl lg:text-8xl text-center text-4xl font-bold text-white">
                  THANK YOU!
                </h1>
                <p className="whitespace-wrap md:text-4xl text-xl text-center font-semibold text-white">{`I have received your message.`}</p>
              </div>
              <div className="w-max min-w-max">
                <Image
                  src="/images/MessageReceived.png"
                  alt="message received"
                  width={300}
                  height={342}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Contact;
