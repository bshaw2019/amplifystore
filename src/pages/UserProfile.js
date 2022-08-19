import React from "react";
import Profile from "../components/Profile";
import { withAuthenticator } from '@aws-amplify/ui-react';

const UserProfile = () =>{
    return(
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <Profile/>
        </div>
    );
}

export default withAuthenticator(UserProfile);