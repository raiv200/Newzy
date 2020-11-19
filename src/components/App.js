import React from "react";
import Header from "./Header"
import Footer from "./Footer"
function login(){
 return (
<div>
     <div>
     <Header/>

     <div className="container">

     <h2> SUBSCRIBE TO OUR NEWS-LETTER</h2>
     <form >
     <input name="fname" placeholder="Enter Your  First Name"></input>
     <input name="lname" placeholder="Enter Your Last Name"></input>
     <input name="email" placeholder="Enter Your Email"></input>
     <button type="submit"> Submit</button>
     </form>
     
     
 </div>
     
         
   </div>

<Footer/>
</div>
 )


}

export default login;