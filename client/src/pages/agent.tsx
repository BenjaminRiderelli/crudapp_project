import {useList} from '@pankod/refine-core'
import {Box, Typography} from '@pankod/refine-mui'

import {AgentCard} from 'components'


const Agents = () => {


  const {data, isLoading,isError} = useList({
    resource:'users'
  })

  const allAgents = data?.data ?? []

  
  if(isLoading) return <h1>...Loading</h1>
  if(isError) return <h1>ERROR!</h1>

  return (
    <Box>
      <Typography 
      fontSize={25}
      fontWeight={700}
      color="#11142d"      
      >
        Agents List
      </Typography>

      <Box
      mt="20px"
      sx={{
        display:'flex',
        flexWrap:'wrap',
        gap:'20px',
        backgroundColor:"#fcfcfc"
      }}
      >
        {allAgents.map((agent) => {
          return (
            <AgentCard 

              key={agent._id}
              id={agent._id}
              name={agent.name}
              email={agent.email}
              avatar={agent.avatar}
              noOfProperties={agent.allProperties.length}
            />
          )
        })}
      </Box>

    </Box>
  )
}

export default Agents