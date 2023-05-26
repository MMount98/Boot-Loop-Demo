const Section = ({ title, children }) => (
  <div className="space-y-2">
    <h3 className="text-2xl font-Oswald">{title}</h3>
    <p className="text-neutral">{children}</p>
  </div>
);

export default function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <img
          src="https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="Team Members"
          className="md:w-1/2  rounded-lg shadow-lg"
        />
        <div className="space-y-6">
          <Section title="About Us">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            volutpat ut orci in accumsan. Cras nec erat vitae metus eleifend
            eleifend. Quisque tincidunt lectus erat, maximus condimentum eros
            commodo at. Sed pulvinar elit et ante hendrerit, a finibus urna
            interdum. Suspendisse potenti. Suspendisse non auctor nunc, eu
            gravida libero. Donec quam dui, pretium id elit non, pharetra
            tincidunt purus. Nam non ultricies sapien. Suspendisse a arcu
            ligula.
          </Section>
          <Section title="Our Mission">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            volutpat ut orci in accumsan. Cras nec erat vitae metus eleifend
            eleifend. Quisque tincidunt lectus erat, maximus condimentum eros
            commodo at. Sed pulvinar elit et ante hendrerit, a finibus urna
            interdum. Suspendisse potenti. Suspendisse non auctor nunc, eu
            gravida libero. Donec quam dui, pretium id elit non, pharetra
            tincidunt purus. Nam non ultricies sapien. Suspendisse a arcu
            ligula.
          </Section>
        </div>
      </div>
    </>
  );
}
