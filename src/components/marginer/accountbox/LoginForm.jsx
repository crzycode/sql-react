import React,{useContext} from 'react'
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from './Common';
import { Marginer, marginer} from '../../marginer'
import { AccountContext } from './accountContext';

export default function LoginForm(props) {
    const {switchToSignup} = useContext(AccountContext)

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
           

        </FormContainer>
        <Marginer direction="vertical" margin={5} />
            <MutedLink href="#">Forget Your Password</MutedLink>
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton type="submit">SignIn</SubmitButton>
            <Marginer direction="vertical" margin="0.5em" />
            <MutedLink href="#">Already have an Account? <BoldLink onClick={switchToSignup}>SignUp</BoldLink></MutedLink>
    </BoxContainer>
}
