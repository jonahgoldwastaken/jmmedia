import { HeroHeader } from './Header'
import { HeroHeading } from './Heading'
import HeroNav from './Nav'
import { useState } from 'react'

export const Hero = () => {
  return (
    <HeroHeader>
      <HeroHeading>Jonah Meijers</HeroHeading>
      <HeroNav />
    </HeroHeader>
  )
}
