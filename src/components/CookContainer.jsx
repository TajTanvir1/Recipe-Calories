import CurrentlyCooking from "./CurrentlyCooking";

const CookContainer = ({ recipe, handlePreparing, handleCurrent, currentRecipe}) => {
   return (
      <div className="lg:w-[38%] h-auto">
         <h2 className="mt-8 lg:ml-6 text-2xl font-semibold">Want to cook: <span>{recipe.length}</span></h2>
         <div className='lg:w-[331px] mx-auto'><hr /></div>
         <div className="lg:ml-6">
            <table className="table">
               <thead>
                  <tr className="text-[#878787] text-base font-fira font-medium">
                     <th></th>
                     <th>Name</th>
                     <th>Time</th>
                     <th>Calories</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     recipe.map((recipes, index) => (
                        <tr key={index} className="my-6 text-[#878787] font-medium bg-[#28282808] font-fira">
                           <th>{index + 1}</th>
                           <td>{recipes.recipe_name}</td>
                           <td>{recipes.preparing_time} minutes</td>
                           <td>{recipes.calories} calories</td>
                           <td><button onClick={() =>{ handlePreparing(recipes.recipe_id), handleCurrent(recipes)}} className="btn bt-lg lg:btn-xl rounded-3xl my-2 text-sm lg:text-base font-medium text-[#150B2B] bg-[#0BE58A]">Preparing</button></td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
         <CurrentlyCooking
         currentRecipe={currentRecipe}
         ></CurrentlyCooking>
      </div>
   );
};


export default CookContainer;