import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../../firebase/Firebaseconfig";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import instance from '../../../api/instance';
import { useDispatch } from "react-redux";



// const history = useHistory()
const Create = () => {

   const dispatch = useDispatch();
   const history = useHistory();
   const [formData, setFormData] = useState({
      email:"",
      password: "",
      name: "",
      avatar: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
   })

  const createAccountWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then((response) => console.log(response))
      
      .catch((err) => console.log(err));
  };
  console.log(formData);
//   if (response) history.push("/")

const createUserWithEmail = (e) =>{
  e.preventDefault();
  instance.post("/users", formData)
  .then(response => {
    if(response.data){  
      // send to store
      dispatch(
        {
          user: response.data,
          type: "CREATE_USER"}
        
        )
    }

    history.push("/");
  })
  .catch(err => console.log(err));
}

  return (
    <div className="auth-create">
      <button onClick={createAccountWithGoogle} className="auth-google-btn">
        {" "}
        <FcGoogle /> Google bilan hisob ochish
      </button>
      <form className="auth-form"onSubmit={createUserWithEmail} >
        <input type="text" placeholder="Name" onChange={ e => setFormData({...formData, name: e.target.value})} />
        <input type="url" placeholder="Avatar" onChange={ e => setFormData({...formData, avatar: e.target.value})} />
        <input type="text" placeholder="Email" onChange={ e => setFormData({...formData, email: e.target.value})} />
        <input type="password" placeholder="Password" onChange={ e => setFormData({...formData, password: e.target.value})} />
        <button type="submit">Xisob ochish</button>
      </form>
    </div>
  );
};

export default Create;
