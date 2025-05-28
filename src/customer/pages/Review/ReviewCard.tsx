import { Avatar, Box, IconButton, Rating} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2';
import Img4 from '../../../Assets/img-4.jpg'; 
import Delete from '@mui/icons-material/Delete';
import React from 'react'
import { red } from '@mui/material/colors';

const ReviewCard = () => {
  return (
    <div className=' flex justify-between '>

          <Grid2 container spacing={9}>

            <Grid2 xs={1}>
              <Box>
                  <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: '#9155FD' }} >
                    S
                    </Avatar>
              </Box>

            </Grid2>
            <Grid2 xs={9}>

                <div className='space-y-2'>
                  <div>
                    <p className='font-semibold text:lg'>Santiago</p>
                    <p className='opacity-70 '>2025-05-26</p>
                  </div>

                </div>
                <Rating
                readOnly
                value={4}
                precision={1}
                />
                <p>Por el precio, es un gran producto!</p>

                <div>
                  <img className='w-24 h-24 object-cover' 
                  src={Img4} alt=''/>

                </div>

            </Grid2>

          </Grid2>

          <div>
            <IconButton>
              <Delete sx={{color:red[700]}}/>
            </IconButton>
          </div>

    </div>
  )
}

export default ReviewCard
