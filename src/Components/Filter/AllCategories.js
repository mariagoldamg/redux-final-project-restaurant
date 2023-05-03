import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>
          What kind of food would you like?</h1>
          {['SEAFOOD', 'SALADS', 'ITALIAN','APPETIZERS', 'ALL']
          .map ((category, index)=>  <Filter category = {category} key={index}/>)}
          <Filter/>
        </div>
    )
 }

 export default AllCategories;