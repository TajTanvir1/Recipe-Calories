const CurrentlyCooking = ({ currentRecipe }) => {
   return (
      <div>
         <div className="h-auto">
            <h2 className="mt-8 lg:ml-6 text-2xl font-semibold">Currently cooking: <span>{currentRecipe.length}</span></h2>
            <div className='w-[331px] mx-auto'><hr /></div>
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
                        currentRecipe.map((currentRecipes, index) => (
                           <tr key={index} className="my-6 text-[#878787] font-fira font-medium bg-[#28282808]">
                              <th>{index + 1}</th>
                              <td>{currentRecipes.recipe_name}</td>
                              <td>{currentRecipes.preparing_time} minutes</td>
                              <td>{currentRecipes.calories} calories</td>
                           </tr>
                        ))
                     }
                     <tr className="text-[#282828CC] font-medium">
                        <td></td>
                        <td></td>
                        <td>Total Minutes =</td>
                        <td>Total Calories =</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default CurrentlyCooking;