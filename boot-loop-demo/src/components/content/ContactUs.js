import ContactUsCard from "../cards/ContactUsCard";

export default function ContactUs() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 px-60">
      <div className="flex flex-col items-center justify-center space-y-2  rounded-lg text-lg font-medium">
        <p>1234 Street Name, City, State, 56789</p>
        <p>(123) 456-7890</p>
      </div>
      <ContactUsCard />
    </div>
  );
}
