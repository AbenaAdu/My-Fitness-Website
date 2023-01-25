import React from 'react'

function CommentCard({comment}) {
  console.log(comment)
  const {user, description} = comment

  // const usercomment = user.map(us => {
  //   return <div>
  //     <p>{us.username}</p>
  //   </div>
  // })
  return (
    <div>
      <h4>Users' Comments</h4>
      <p>{description}</p>
    </div>
  )
}
export default CommentCard
