import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
 } from '../../utils/firebase/firebase.utils';

import { useState } from 'react';
import SingUpForm from '../../components/sing-up-form/sing-up-form.component';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import './sing-in.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    /* const handleSubmit = async (event) =>{
        event.preventDefault();
    
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
    
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }else {
                console.log('user creation encoutered an error', error);
            }
        }
       }; */

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setFormFields({...formFields,[name]: value})
    };

    
    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span> Sign in with your email and password</span>
            <form>
                <FormInput
                    label={'Email'}
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label={'Password'}
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
            </form>
            <Button type='submit'>
                Sign in
            </Button>
            <Button buttonType='google' onClick={logGoogleUser} >
                Sign in with Google
            </Button>
            <SingUpForm/>
        </div>
    );
};

export default SignIn;