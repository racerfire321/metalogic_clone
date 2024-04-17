'use client'

import Link from 'next/link'
import React from 'react'
import { CiGlobe, CiMobile3, CiMobile4 } from 'react-icons/ci'
import { FaComputer } from 'react-icons/fa6'
import { LuHeartHandshake } from 'react-icons/lu'

const ServiceSection = () => {
  return (
    <section className='grid w-[80%] gap-y-8 pt-20 2xl:container sm:mx-auto lg:w-[90%] lg:grid-cols-2'>
        <div className='order-2 grid items-center justify-center gap-y-8 px-4 sm:grid-cols-2'>
            <div className='flex flex-col gap-8'>
            <div className='relative w-[13rem] h-[310px] bg-[white]' style={{perspective:'900px'}}>
                  <div className='absolute single-card w-[100%] h-[100%] transition-all duration-500 ease-linear '  style={{ transformStyle:'preserve-3d'}}>
                    <div className='absolute w-[100%] h-[100%] border-[2px] border-red-400 shadow-lg rounded-xl py-4 text-center flex flex-col items-center justify-center gap-4' style={{ backfaceVisibility: 'hidden' }}>
                        <div className='rounded-full bg-[#f04646] p-8 text-white text-4xl'>
                            <FaComputer />
                        </div>
                        <div className='px-2'>
                            <div className='pb-4 text-xl font-semibold'>UI/UX</div>
                            <div className='px-4 text-sm'>we create interfaces that are not just visually appealing, but also intuitive and conversion-focused.</div>
                        </div>
                    </div>
                    <div className='absolute w-[100%] h-[100%] bg-gradient-to-r from-[#FF5d5d] to-[#DD2476] flex flex-col items-center justify-center text-center rounded-xl shadow-lg' style={{ backfaceVisibility: 'hidden', transform:'rotateY(180deg)' }}>
                      <div className='p-2'>Discover how we design interfaces that blend visual appeal with intuitiveness, driving conversions and enhancing user experience seamlessly</div>
                      <Link href={'/#'} className='text-blue-200 underline underline-offset-4'>See More</Link>
                    </div>
                  </div>
                </div>
                <div className='relative w-[13rem] h-[370px] bg-[white]' style={{perspective:'900px'}}>
                  <div className='absolute single-card w-[100%] h-[100%] transition-all duration-500 ease-linear '  style={{ transformStyle:'preserve-3d'}}>
                    <div className='absolute w-[100%] h-[100%] border-[2px] border-red-400 shadow-lg rounded-xl py-4 text-center flex flex-col items-center justify-center gap-4' style={{ backfaceVisibility: 'hidden' }}>
                        <div className='rounded-full bg-[#f04646] p-8 text-white text-4xl'>
                        <CiGlobe />
                        </div>
                        <div className='px-2'>
                            <div className='pb-4 text-xl font-semibold'>Web <br/> Development</div>
                            <div className='px-4 text-sm'>Our creative designers and skilled developers collaborate to create stunning websites that engage visitors and convert them into loyal customers.</div>
                        </div>
                    </div>
                    <div className='absolute w-[100%] h-[100%] bg-gradient-to-r from-[#FF5d5d] to-[#DD2476] flex flex-col items-center justify-center text-center rounded-xl shadow-lg' style={{ backfaceVisibility: 'hidden', transform:'rotateY(180deg)' }}>
                      <div className='p-2'>Witness the synergy of our creative designers and skilled developers, crafting stunning websites that captivate visitors and foster customer loyalty.</div>
                      <Link href={'/#'} className='text-blue-200 underline underline-offset-4'>See More</Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='relative w-[13rem] h-[380px]' style={{perspective:'900px'}}>
                  <div className='absolute single-card w-[100%] h-[100%] transition-all duration-500 ease-linear '  style={{ transformStyle:'preserve-3d'}}>
                    <div className='absolute w-[100%] h-[100%] bg-gradient-to-r from-[#FF5d5d] to-[#DD2476] rounded-lg  py-4 text-center flex flex-col items-center justify-center gap-4' style={{ backfaceVisibility: 'hidden' }}>
                    <div className='rounded-full bg-[#f04646] p-8 text-white text-4xl'>
                    <CiMobile3 />
                        </div>
                        <div className='px-2 text-white'>
                            <div className='pb-4 text-xl font-semibold'>Mobile <br/>Development</div>
                            <div className='px-4 text-sm'>From streamlining operations to data-driven insights, we create solutions that empower your business to thrive in the digital age.</div>
                        </div>
                    </div>
                    <div className='absolute w-[100%] h-[100%] bg-white border-[2px] border-red-400 rounded-xl shadow-lg flex flex-col items-center justify-center text-center' style={{ backfaceVisibility: 'hidden', transform:'rotateY(180deg)' }}>
                      <div className='p-2'>Explore how our tailored solutions drive operational efficiency and leverage data insights for your business in the digital age.</div>
                      <Link href={'/#'} className='text-blue-600 underline underline-offset-4'>See More</Link></div>
                  </div>
                </div>
                <div className='relative w-[13rem] h-[380px] bg-[white]' style={{perspective:'900px'}}>
                  <div className='absolute single-card w-[100%] h-[100%] transition-all duration-500 ease-linear '  style={{ transformStyle:'preserve-3d'}}>
                    <div className='absolute w-[100%] h-[100%] border-[2px] border-red-400 shadow-lg rounded-xl py-4 text-center flex flex-col items-center justify-center gap-4' style={{ backfaceVisibility: 'hidden' }}>
                        <div className='rounded-full bg-[#f04646] p-8 text-white text-4xl'>
                        <LuHeartHandshake />
                        </div>
                        <div className='px-2'>
                            <div className='pb-4 text-xl font-semibold'>Brand &<br/>Marketing</div>
                            <div className='px-4 text-sm'>Our branding experts craft strategies, logos, and visuals that resonate with your target audience, leaving a lasting impression.</div>
                        </div>
                    </div>
                    <div className='absolute w-[100%] h-[100%] bg-gradient-to-r from-[#FF5d5d] to-[#DD2476] flex flex-col items-center justify-center text-center rounded-xl shadow-lg' style={{ backfaceVisibility: 'hidden', transform:'rotateY(180deg)' }}>
                      <div className='p-2'>Discover how our branding strategies, logos, and visuals create a lasting impact, resonating effectively with your target audience.</div>
                      <Link href={'/#'} className='text-blue-200 underline underline-offset-4'>See More</Link>
                    </div>
                  </div>
                </div>
                <div className='relative w-[13rem] h-[380px]' style={{perspective:'900px'}}>
                  <div className='absolute single-card w-[100%] h-[100%] transition-all duration-500 ease-linear '  style={{ transformStyle:'preserve-3d'}}>
                    <div className='absolute w-[100%] h-[100%] bg-gradient-to-r from-[#FF5d5d] to-[#DD2476] rounded-lg  py-4 text-center flex flex-col items-center justify-center gap-4' style={{ backfaceVisibility: 'hidden' }}>
                    <div className='rounded-full bg-[#f04646] p-8 text-white text-4xl'>
                            <CiMobile4 />
                        </div>
                        <div className='px-2'>
                            <div className='pb-4 text-xl font-semibold'>Internship/<br/>Training</div>
                            <div className='px-4 text-sm'>Our training programs and workshops cover a range of topics, from software utilization to design principles, enhancing your team's skills and productivity.</div>
                        </div>
                    </div>
                    <div className='absolute w-[100%] h-[100%] bg-white border-[2px] border-red-400 rounded-xl shadow-lg flex flex-col items-center justify-center text-center' style={{ backfaceVisibility: 'hidden', transform:'rotateY(180deg)' }}>
                      <div className='p-2'>Explore our comprehensive training programs and workshops, spanning software utilization to design principles, elevating your team's skills and productivity.</div>
                      <Link href={'/#'} className='text-blue-600 underline underline-offset-4'>See More</Link></div>
                  </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-6 px-4 md:px-8 lg:order-2">
        <div style={{ opacity: 1, transform: 'none' }}>
          <span className="font-semibold">Our Services</span>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <h5 className="text-5xl font-bold">Empowering <br /> Your Vision</h5>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <p>
            Our range of offerings is carefully curated to cater to your diverse needs, ensuring that your digital journey is seamless, captivating, and results-driven.
          </p>
        </div>
        <a
          aria-label="services that metalogic software provides"
          className="flex w-fit gap-2 rounded-lg border border-secondary-300 px-3 py-2 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white"
          href="/services"
        >
          Learn More
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-arrow-right"
>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</svg>

        </a>
      </div>
    </section>
  )
}

export default ServiceSection


