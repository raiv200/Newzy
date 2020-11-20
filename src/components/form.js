import React, {useState} from "react";

function Form(){
  
  const [fullName, setFullName]= useState({
      fName:"",
      lName:"",
      email:""
  });

  const[headingText,setHeadingText]= useState("");
   const[text, setText]= useState("");

  function handleChange(event){
    const newValue = event.target.value;
    const inputName= event.target.name;

    setFullName((prevValue)=>{
     
      if(inputName === "fName"){
          return {
              fName:newValue,
              lName:prevValue.lName,
              email:prevValue.email
          }
      } else if(inputName === "lName"){
        return {
            fName:prevValue.fName,
            lName:newValue,
            email:prevValue.email
        }
      }else {
        return {
            fName:prevValue.fName,
            lName:prevValue.lName,
            email:newValue
        }
      }
    
    })

  }

  function handleClick(event){
    
    setHeadingText(fullName.fName);
    event.preventDefault();
    
    if(fullName.fName===""){
        return setText("")

    }else{
        return setText("Thanks For Subscribing")
    }
      
       
  }
  
  
  return  ( <div className="container">

     <h2> SUBSCRIBE TO OUR NEWS-LETTER</h2>
     <p> {text} {headingText} </p>
     <form >
     <input name="fName" placeholder="Enter Your  First Name" onChange={handleChange} value={fullName.fName}></input>
     <input name="lName" placeholder="Enter Your Last Name" onChange={handleChange} value={fullName.lName}></input>
     <input name="email" placeholder="Enter Your Email" onChange={handleChange} value={fullName.email}></input>
     <button type="submit" onClick={handleClick}>  Submit</button>
     </form>
   
</div>
)
 
}

export default Form;