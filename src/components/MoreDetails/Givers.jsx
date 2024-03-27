import React from 'react'
import Avatar from '../Avatar';

const Givers = () => {
   const data = [
     {
      name:"Belal naim",
      email:"contactbelalnaim@gmail.com",
      phone:"6386164836",
      address:"Gorakhpur",
      amount:1200
     },
     {
      name:"Belal naim",
      email:"contactbelalnaim@gmail.com",
      phone:"6386164836",
      address:"Gorakhpur",
      amount:1200
     },
     {
      name:"Belal naim",
      email:"contactbelalnaim@gmail.com",
      phone:"6386164836",
      address:"Gorakhpur",
      amount:1200
     },
   ];
   return (
     <div className="">
       <div className="text-xl mt-4 font-bold">Givers</div>
       {
        "abcde".split("").map((item,index)=>{
          return (
            <div className="flex items-center gap-3 py-6 border-b">
              <Avatar name={"Belal"} size="sm" />
              <div>
                <div>Mohd Belal Naim</div>
                <div>₹12,00,000</div>
              </div>
            </div>
          );
        })
       }
       
     </div>
   );
}

export default Givers