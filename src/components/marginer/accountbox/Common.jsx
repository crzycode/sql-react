import styled from "styled-components";


export const BoxContainer = styled.div`
widows: 100%;
display: flex;
flex-direction: column;
align-items: center;
   

`;
export const FormContainer = styled.form`
width: 100%;
display: flex;
flex-direction: column;
outline: none;
border: none;
border-bottom: 1.5px solid rgba(200,200,200,0.4);
`;
export const MutedLink = styled.a`
font-size: 12px;
color: rgba(200,200,200,0.8);
font-weight: 500;
text-decoration:none;
`;
export const BoldLink = styled.a`
font-size: 12px;
color: rgb(241,196,15);
font-weight: 500;
text-decoration:none;
`;
export const  Input = styled.input`
width: 100%;
height: 42px;
outline: none;
border: none;
padding-left: 10px;
&::placeholder{
    color: rgba(200,200,200,1);

}
&:not(:last-of-type){
    border-bottom: 1.5px solid rgba(200,200,200,0.4);
}
&:focus{
    outline: none;
    border-bottom: 2px solid rgb(241,195,15);
    transition: 200ms ease-in-out;
}

`;
export const SubmitButton = styled.button`
width: 100%;
padding: 11px 40%;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(241,195,15);
background: linear-gradient(
58deg,
rgba(241,196,15,1),
rgba(243,172,18,1)

);
&:hover{
    filter: brightness(1.03);
}
`;