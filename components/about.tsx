import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import profilepic from '../public/profilepic.jpeg'

export default function AboutMePage() {
    return (
        <div className='section text-center p-10' id='about'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Javier Phon Zhee Kai</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Student, Developer, Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 max-w-5xl mx-auto'>
                I am a penultimate year Computer Science undergraduate at the National University 
                of Singapore.
                passionate about technology and eager to acquire real-world experience 
                in the tech industry in areas like Software Engineering or Artificial Intelligence. 
                I am a also a highly motivated and hardworking individual who is always willing 
                to learn, improve on technical skills, and meet new people.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <a href='https://www.linkedin.com/in/javier-phon-zhee-kai/'>
                    <AiFillLinkedin />
                </a>
                <a href='https://github.com/Javiier-pzk'>
                    <AiFillGithub />
                </a>
            </div>
            <div className='relative mx-auto rounded-full mt-10 overflow-hidden w-80 h-80'>
                <Image src={profilepic} alt='profilepic' object-fit='cover'/>
            </div>
        </div>
    )
}