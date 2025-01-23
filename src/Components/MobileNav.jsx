import React, { useState } from "react";
import { GoBookmark } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { TiThMenuOutline } from "react-icons/ti";


function MobileNav() {
  
  return (
    <div className="bg-white dark:bg-main-600 dark:text-main-100 shadow fixed inset-x-0 bottom-0">
      <div className="flex justify-between items-center md:hidden px-5 py-3">
        {/* All Recipe Button */}
        
          <div
            className='flex flex-col items-center'
            
          >
            <TiThMenuOutline className="text-2xl" />
            <p className="text-sm">Recipe</p>
            
          </div>
        

        {/* Home Button */}
        
          <div
            className='flex flex-col items-center'
          >
            <GoHome className="text-2xl" />
            <p className="text-sm">Home</p>
        
             
            
          </div>
        

        {/* Favorite Button */}
    
          <div
            className='flex flex-col items-center'
          >
            <GoBookmark className="text-2xl" />
         <p className="text-sm">Saved</p>
            
          </div>
        
      </div>
    </div>
  );
}

export default MobileNav;
