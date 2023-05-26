import ContactUsCard from "../cards/ContactUsCard";

export default function ContactUs() {
  return (
    <>
      <div className="lg:flex items-center justify-between w-full px-52 lg:space-x-4 ">
        <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-0 bg-base-300 p-4 rounded-box">
          <p className="text-lg font-medium">
            1234 Street Name, City, State, 56789
          </p>
          <p className="text-lg font-medium">(123) 456-7890</p>
        </div>
        <div className="divider lg:divider-horizontal">OR</div> 
        <div className="bg-base-300 rounded-box my-4">
          <ContactUsCard />
        </div>
      </div>
    </>
  );
}
