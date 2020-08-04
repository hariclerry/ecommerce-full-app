import React from 'react';

import Signin from 'components/signIn/signin'
import SignUp from "components/signUp/signUp";
import './userAuth.scss'

const UserAuth = () => {
    return (
        <div className='sign-in-sign-up'>
        <Signin />
        <SignUp />
        </div>
    );
};

export default UserAuth;