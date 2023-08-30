import React,{useEffect, useState} from "react";
const BasicForm = (props) => {
  const [contactInfo , setContactInfo] = useState({
    name: '',
    lastName: '',
    email: '',
  });

  const [isContactValid , setContactValid] =useState ({
    nameValid: false,
    lastNameValid: false,
    emailValid: false,
  });
  const [formValid ,setFormValid] = useState ();
  const [isContactReallyVaild , setIsContactReallyVaild] = useState({
      nameVailder : true,
      lastNameVailder : true,
      emailVailder : true,
  })
  useEffect(()=>{
if( contactInfo.name === "" && isContactValid.nameValid){
  setIsContactReallyVaild((prev)=>({
    ...prev,
    nameVailder : false,
  }))
}else if (contactInfo.lastName === "" && isContactValid.lastNameValid){
  setIsContactReallyVaild((prev)=>({
    ...prev,
  lastNameVailder: false,
  }))
}else if (contactInfo.email === "" && isContactValid.emailValid){
  setIsContactReallyVaild((prev)=>({
    ...prev,
    emailVailder : false,
  }))
}else{
  setIsContactReallyVaild((prev)=>({
    ...prev,
    nameVailder : true,
    lastNameVailder : true,
    emailVailder : true,
  }))
}

  },[contactInfo, isContactValid]);

  const onBlurContactHandler = (identifier , event)=>{
    if(identifier === 'firstName'&& event.target.value.trim() === ''){
      setContactValid((prev)=>({
        ...prev,
        nameValid: true,
      }))
    }else if(identifier === 'lastName'&& event.target.value.trim()=== ''){
      setContactValid((prev)=>({
        ...prev,
        lastNameValid: true,
      }))
    }else if (identifier === 'email'&& event.target.value.trim()=== ''){
      setContactValid((prev)=>({
        ...prev,
        emailValid: true,
      }))
    }else{
      setContactValid((prev)=>({
        ...prev,
        nameValid: false,
        lastNameValid: false,
        emailValid: false,
      }))
    }
  }


  const contactInfoHandler = (identifier, event)=>{
    if(identifier === 'firstName'){
      setContactInfo((prev)=>({
        ...prev,
        name: event.target.value,
      }))
    }else if (identifier === 'lastName'){
      setContactInfo((prev)=>({
        ...prev,
        lastName:event.target.value,
      }))
    }else if(identifier === 'email'){
      setContactInfo((prev)=>({
        ...prev,
        email: event.target.value
      }))
    }
  }

  const submitHandler =(event)=>{
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo((prev)=>({
      ...prev,
      name: '',
      lastName: '',
      email: '',
    }))
  }



  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={isContactValid.nameValid ? "form-control invalid": "form-control"}>
          <label htmlFor='name'>First Name</label>
          <input
           type='text'
            id='name' 
            onChange={(event)=>{contactInfoHandler("firstName", event)}}
            // required
            value={contactInfo.name}
            onBlur={(event)=>{onBlurContactHandler("firstName", event)}}
            />
            { !isContactReallyVaild.nameVailder && <p className="error-text">please input your first name</p>}
        </div>
        <div className={isContactValid.lastNameValid ? "form-control invalid": "form-control"}>
          <label htmlFor='name'>Last Name</label>
          <input
           type='text' 
           id='name'
           onChange={(event)=>{contactInfoHandler("lastName", event)}}
          //  required
           value={contactInfo.lastName}
           onBlur={(event)=>{onBlurContactHandler("lastName", event)}}
           />
           {!isContactReallyVaild.lastNameVailder && <p className="error-text">please input your last name</p>}
        </div>
      </div>
      <div className={isContactValid.emailValid ? "form-control invalid": "form-control"}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text'
         id='name' 
         onChange={(event)=>{contactInfoHandler("email", event)}}
        //  required
         value={contactInfo.email}
         onBlur={(event)=>{onBlurContactHandler("email", event)}}
         />

        { !isContactReallyVaild.emailVailder && <p className="error-text"> please input your email Address</p>}
      </div>
      <div className='form-actions'>
        <button > Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
