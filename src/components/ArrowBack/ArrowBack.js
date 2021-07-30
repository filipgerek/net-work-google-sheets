import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../pages/arrow-right.svg'

export const ArrowBack = () => (
  <Link to="./">
    <img alt="arrow-icon" src={Arrow} className="arrow" />
  </Link>
)
