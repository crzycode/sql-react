import React,{useContext, useState} from 'react'
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from './Common';
import { Marginer, marginer} from '../../marginer'
import { AccountContext } from './accountContext';
import axios from 'axios';

export default function SignUpForm(props) {
    
   const [data, setData] = useState({
       fname: "",
       email: "",
       password: "",
       cpassword: "",
   })
   function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
   }
   function submit(e){
       e.preventDefault();
       axios.post("/Home/Userdata", {
           fname: data.fname,
           email: data.email,
           password: data.password,
           cpassword: data.cpassword
       }).then(res =>{
           console.log(res.data)
       })

   }
    const {switchToSignin} = useContext(AccountContext)

    return <BoxContainer>
        <form onSubmit={(e) => submit(e)}>
        <FormContainer>

            <Input onChange={(e) =>handle(e)} id="fname" type="text" value={data.fname}placeholder="Full Name" />
            <Input onChange={(e) =>handle(e)}id="email"type="email" value={data.email} placeholder="Email " />
            <Input onChange={(e) =>handle(e)}id="password"type="password" value={data.passsword}placeholder="Password" />
            <Input onChange={(e) =>handle(e)}id="cpassword"type="password"value={data.cpasssword} placeholder="Confirm Password" />
           

        </FormContainer>
        
        <Marginer direction="vertical" margin="1em" />
      
           
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton  type="submit">SignUp</SubmitButton></form>
            <Marginer direction="vertical" margin="0.5em" />
            <MutedLink href="#">Already have an Account? <BoldLink onClick={switchToSignin}>Signin</BoldLink></MutedLink>
    </BoxContainer>
}
