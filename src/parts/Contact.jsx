import { useNav } from "../hooks/useNav";

const Contact = () => {
  const contactRef = useNav("Contact");

  return (
    <section
      ref={contactRef}
      id="contactSection"
      className="min-h-screen flex flex-col"
    >
      Contact
    </section>
  );
};

export default Contact;
