import React from 'react'
import PropTypes from 'prop-types'

function ChildProfil({user,HandleName,children}) {
    return(
       <div>
           <h1>Checkpoint Props</h1>
           <h2>Full Name</h2>
           <h3>{user.fullName}</h3>
           <h2>Bio</h2>
           <h3>{user.bio}</h3>
           <h2>Profession</h2>
           <h3>{user.profession}</h3>
           <br/>
           <button onClick={()=>HandleName(user.fullName)}>Hello Dear User</button>
           <div>
               {children}
           </div>
       </div>
    )
   
}
    ChildProfil.propTypes={
        user:PropTypes.object.isRequired,
        HandleName:PropTypes.func
    
}
export default ChildProfil