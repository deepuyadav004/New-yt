import React from 'react'
import { stack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants'


const Navbar = () => (
  <stack
    direction="row"
    alignItem="center"
    p={2}
    sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}

  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt="logo" height={45} />
    </Link>
  </stack>
)

export default Navbar