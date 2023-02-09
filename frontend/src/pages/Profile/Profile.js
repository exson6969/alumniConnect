import React from 'react'
import Header from '../../components/Header/Header'
import UserCard from '../../components/UserCard/UserCard'

function Profile({user}) {
    return (
        <div>
            <Header />
            <UserCard name={user.name} />
        </div>
    )
}

export default Profile