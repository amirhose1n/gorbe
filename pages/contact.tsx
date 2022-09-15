import PageHeader from "../src/components/pageHeader";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <div className="layout layout--center desktop:py-16 desktop:px-0 tablet:px-16 px-6 py-6">
        <PageHeader img="/images/texts/Contact.png" />
        <div className="desktop:py-12 py-6 tablet:py-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2 desktop:w-1/2 tablet:w-2/3 w-full"
          >
            <input
              placeholder="email"
              {...register("email", { required: true })}
              className="p-2 text-md font-semibold rounded-md"
            />
            {errors.exampleRequired && <span>This field is required</span>}
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
              {...register("message")}
              className="p-2 text-md font-semibold rounded-md"
            />
            <input
              type="submit"
              className="bg-white rounded-md py-2 font-semibold cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
