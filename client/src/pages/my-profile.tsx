import { useGetIdentity, useOne } from "@pankod/refine-core"
import {Profile} from 'components'



const MyProfile = () => {

  const { data:user } = useGetIdentity()

  const { data, isLoading, isError} = useOne({
    resource:'users',
    id: user?.userid
  })



  const myProfile = data?.data ?? []


  if(isLoading) return <h1>...Loading</h1>

  if(isError) return <h1>ERROR!</h1>


  return (
    <Profile 
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  )
}

export default MyProfile