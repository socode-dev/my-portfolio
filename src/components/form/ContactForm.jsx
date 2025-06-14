import Button from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";

const ContactForm = ({
  formData,
  handleChange,
  emailErr,
  onSubmit,
  state,
  error,
  successMessage,
}) => {
  const { name, email, subject, message } = formData;

  return (
    <>
      <h3 className="text-4xl text-[rgb(var(--color-text))] font-extrabold">
        Send a Message
        <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h3>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-[700px] space-y-8 rounded-lg md:shadow-lg md:px-4 py-4"
      >
        <div className="w-full space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="space-y-2 w-full flex flex-col">
              <label
                htmlFor="name"
                className="text-base text-[rgb(var(--color-text))] font-medium"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                value={name}
                className="px-4 py-1.5 border-2 border-[rgb(var(--color-muted))] focus:outline-[rgb(var(--color-brand))] rounded-lg"
                required
              />
            </div>

            <div className="space-y-2 w-full flex flex-col">
              <label
                htmlFor="email"
                className="text-base text-[rgb(var(--color-text))] font-medium"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                value={email}
                className="px-4 py-1.5 border-2 border-[rgb(var(--color-muted))] focus:outline-[rgb(var(--color-brand))] rounded-lg"
                required
              />
              {emailErr && <p className="text-sm text-red-500">{emailErr}</p>}
            </div>
          </div>

          <div className="space-y-2 w-full flex flex-col">
            <label
              htmlFor="subject"
              className="text-base text-[rgb(var(--color-text))] font-medium"
            >
              Subject
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="subject"
              id="subject"
              value={subject}
              className="px-4 py-1.5 border-2 border-[rgb(var(--color-muted))] focus:outline-[rgb(var(--color-brand))] rounded-lg"
              required
            />
          </div>

          <div className="space-y-2 w-full flex flex-col">
            <label
              htmlFor="message"
              className="text-base text-[rgb(var(--color-text))] font-medium"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              id="message"
              rows="5"
              value={message}
              className="px-4 py-1.5 border-2 border-[rgb(var(--color-muted))] focus:outline-[rgb(var(--color-brand))] rounded-lg resize-none"
              required
            ></textarea>
          </div>
        </div>

        <Button type="submit" disabled={state.submitting}>
          {state.submitting ? (
            <p className="flex items-center space-x-2">
              <LoadingSpinner color="white" size={20} />
              <span>sending...</span>
            </p>
          ) : (
            <span>Send Message</span>
          )}
        </Button>
      </form>

      {state.succeeded && (
        <p className="text-sm text-green-500">{successMessage}</p>
      )}
      {state.errors && <p className="text-sm text-red-500">{error}</p>}
    </>
  );
};

export default ContactForm;
