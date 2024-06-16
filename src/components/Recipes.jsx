import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipes = ({ recipes, handleRecipeBtn }) => {
   const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipes;


   return (
      <div className='mt-4 mx-auto'>
         <div className=" border-2 border-[#28282833] rounded-xl max-w-[379px] p-6">
            <figure className="h-[200px]">
               <img src={recipe_image} className="rounded-xl mx-auto h-[200px]" />
            </figure>
            <div className="text-left">
               <h2 className="text-xl font-semibold my-4 text-[#282828]">{recipe_name}</h2>
               <p className='text-[#878787] text-base mb-3'>{short_description}</p>
               <div className='w-[331px] mx-auto'><hr /></div>
               <div>
                  <h2 className='text-xl font-bold my-4 text-[#282828]'>Ingredients: {ingredients.length}</h2>
                  <ul className='list-disc list-inside text-lg leading-8 mb-2 ml-4 text-[#878787] font-fira'>
                     <li>{ingredients[0]}</li>
                     <li>{ingredients[1]}</li>
                     <li>{ingredients[2]}</li>
                  </ul>
               </div>
               <div className='w-[331px] mx-auto'><hr /></div>
               <div className='flex text-[#282828CC] my-4'>
                  <p className='flex items-center'><span className='text-2xl m-2'><CiClock2 /></span><span className='m-1'>{preparing_time}</span> minutes</p>
                  <p className='ml-6 flex items-center'><span className='text-2xl m-2'><AiOutlineFire /></span><span className='m-1'>{calories}</span> calories</p>
               </div>
               <div className="card-actions">
                  <button onClick={() => handleRecipeBtn(recipes)} className="btn rounded-3xl my-2  text-base font-medium text-[#150B2B] bg-[#0BE58A]">Want to Cook</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Recipes;