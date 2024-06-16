import banner from '../assets/banner.png'

const Header = () => {
   return (
      <div>
         <div style={{ backgroundImage: `url(${banner})` }} className='lg:bg-contain bg-top rounded-xl bg-no-repeat lg:min-h-lvh px-4 py-8 lg:p-[130px] max-w-[1320px]'>
            <h3 className="text-3xl lg:text-5xl font-bold leading-[40px] lg:leading-[60px] text-white lg:w-[897px]">Discover an exceptional cooking class tailored for you!</h3>
            <p className='text-white text-md lg:text-lg font-light my-4 lg:my-6 max-w-[933px]'>Explore our Recipe Calories with best experience of recipes items, techniques, and inspiration tailored for chefs, by chefs. Elevate your cooking to new heights today.</p>
            <div>
            <button className="btn btn-primary border-none bg-[#0BE58A] text-[#150B2B] rounded-full">Explore Now</button>
            <button className="btn btn-outline border-white text-white ml-8 rounded-full">Our Feedback</button>
            </div>
         </div>
      </div>
   );
};

export default Header;