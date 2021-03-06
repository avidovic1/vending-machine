import React from 'react'
import { useHistory } from 'react-router-dom'

import User from '../../models/User'
import UserList from '../core/UserList'
import Button from '../atoms/Button'

function UserListPage(): JSX.Element {
  const history = useHistory()

  const onUserSelect = (user: User) => {
    history.push(`/users/${user.id}/edit`)
  }

  const onCreateNewUser = () => {
    history.push('/users/create')
  }

  return (
    <div className="flex flex-col m-auto w-96">
      <h1 className="mb-4 text-center">Users</h1>
      <UserList onSelect={onUserSelect} />
      <Button text="Create new" onClick={onCreateNewUser} variation="success" />
    </div>
  )
}

export default UserListPage
