'use client'
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' id='about'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    ref={ref}
  >
    <SectionHeading>
      about
    </SectionHeading>
    <p className='mb-3'>
    My journey began with a deep interest in emerging technologies, leading me to pursue programming and 3D  . {" "}
      <span className="font-medium"></span>, I built a strong foundation through online courses and hands-on projects in{" "}
      <span className="italic">As a 3D artist, I’m driven by the excitement of turning creative ideas into something tangible through digital tools.</span>.{" "}
      <span className="italic">My passion for </span>
      I am passionate about creating immersive 3D art, blending creativity and technical expertise in Blender, Maya, Unreal Engine, and more. My goal is to bring ideas to life with visually striking and detailed designs. 
      </p>
      <p>
      Working with programs like Blender, Maya, Unreal Engine, Photoshop, and Illustrator, I find joy in blending the technical and the artistic—always learning and experimenting to push the limits of what’s possible.{" "}
      
      . I enjoy problem-solving, and my favorite part of programming is the challenge of developing innovative solutions. Through creativity, problem-solving, and a genuine passion for this field, I aim to leave my mark on the world of 3D art. {" "}
      <span className="font-medium">.</span> .
    </p>
    <p>
      I enjoy exploring new technologies{" "}
      <span className="font-medium"></span>.  and staying updated on the latest advancements in{" "}
      <span className="font-medium">animation </span>.
    </p>
  </motion.section>
}

export default About