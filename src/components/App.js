import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./form";
function login(){
 return (
<div>
     <div>
     <Header/>

     <Form/>
     </div>
   <div>
    <p>Get the Latest Technology and Programming News at your Email. </p>
    
    <i className="far fa-newspaper fa-9x"></i>
    <h2>SubScribe Now !!</h2>
  </div>

<Footer/>
</div>
 )


}

export default login;