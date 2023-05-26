export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-around p-4 md:px-48 bg-white  ">
        <img
          src="https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="Boot Loop Team Mebers"
          className="w-full object-cover self-center md:w-3/6 rounded shadow"
        />
        <div className="divider lg:divider-horizontal py-10 md:py-32 before:bg-base-100 after:bg-base-100"></div>
        <div className="z-0 w-full md:w-96">
          <h3 className="text-2xl md:text-4xl m-7 font-Oswald">About Us</h3>
          <p className="font-Oswald text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            volutpat ut orci in accumsan. Cras nec erat vitae metus eleifend
            eleifend. Quisque tincidunt lectus erat, maximus condimentum eros
            commodo at. Sed pulvinar elit et ante hendrerit, a finibus urna
            interdum. Suspendisse potenti. Suspendisse non auctor nunc, eu
            gravida libero. Donec quam dui, pretium id elit non, pharetra
            tincidunt purus. Nam non ultricies sapien. Suspendisse a arcu
            ligula.
          </p>
          <h3 className="text-2xl md:text-4xl m-7 font-Oswald">Our Mission</h3>
          <p className="font-Oswald text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            volutpat ut orci in accumsan. Cras nec erat vitae metus eleifend
            eleifend. Quisque tincidunt lectus erat, maximus condimentum eros
            commodo at. Sed pulvinar elit et ante hendrerit, a finibus urna
            interdum. Suspendisse potenti. Suspendisse non auctor nunc, eu
            gravida libero. Donec quam dui, pretium id elit non, pharetra
            tincidunt purus. Nam non ultricies sapien. Suspendisse a arcu
            ligula.
          </p>
        </div>
      </div>
    </>
  );
}
