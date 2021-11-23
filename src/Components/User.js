import React from 'react'

function User({user}) {
    return (
        
            <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
            </tr>
        
    )
}

export default User

