import {useList} from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'

import{
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from '../components/index'

const Home = () => {

    const{data, isLoading,isError} = useList({
      resource:'properties',
      config: {
        pagination:{
          pageSize:4
        }
      }
    })


    const lastestProperties = data?.data ?? []

  if(isLoading) return <h1>...Loading</h1>
  if(isError) return <h1>Something went wrong</h1>

  return (
    <Box>
      <Typography
        fontSize={25}
        fontWeight={700}
        color="#11142D"
      >
         Dashboard 
      </Typography>

      <Box mt="20px" display="flex" 
      flexWrap="wrap" gap={4}>
        <PieChart 
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#ef3413']}
        />
        <PieChart 
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={['#47fbe8', '#e4a8ef']}
        />
        <PieChart 
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={['#475b38', '#e43eff']}
        />
        <PieChart 
          title="Properties for Sale"
          value={555}
          series={[75, 25]}
          colors={['#775ae8', '#c8a8ef']}
        />
      </Box>

      <Stack mt="25px" 
      width="100%" 
      gap={4} 
      direction={{
        xs:'column',
        lg:'row'
        }}
        >

        <TotalRevenue/>
        <PropertyReferrals/>

      </Stack>
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
       <Typography 
      fontSize="18px"
      fontWeight={600}
      color="#11142d"        
       >Latest Properties</Typography>

       <Box 
       mt={2.5} 
       sx={{
        display:'flex', 
        flexWrap:"wrap", 
        gap:4
        }}>    
        {lastestProperties.map((property) => {
          return(
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          )
        })}

       </Box>
      </Box>
    </Box>
  )
}

export default Home