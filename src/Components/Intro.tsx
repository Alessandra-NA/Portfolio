import React from 'react'
import pfp from '../Assets/pfp-linkedin.webp'
import cv from '../Assets/cv.pdf'

function Intro() {
  return (
    <section className='flex flex-col md:flex-row-reverse mb-16 md:items-center'>
      <div className='flex items-center gap-3 md:w-1/3 md:flex-col'>
        <img className='profile-pic w-20 rounded-full md:w-48 lg:w-60' src={pfp} alt="" />
        <div className='bg-green-200 border border-green-700 text-green-700 px-4 py-2 h-fit text-sm rounded-full'>Ready to work ✅</div>
      </div>
      <div className='md:w-2/3'>
        <h1 className='text-5xl font-bold my-6'>Alessandra Nuñez Agüero</h1>
        <p className='pb-3'><b className='text-rose-500'>Full Stack Developer</b> con más de 2 años de experiencia en la creación de aplicaciones web. Egresada de la carrera de <b className='text-rose-500'>Ingeniería de sistemas</b>, de la Universidad de Lima.</p>
        <p>Especializada en <b className='text-rose-400'>Ingeniería de Software</b> y <b className='text-rose-400'>Sistemas de la información</b>.</p>
        <div className="botones my-8 flex gap-4">
          <a href={'mailto:anunez.a01@gmail.com'} className='rounded-md px-4 py-3 button bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white'>Contáctame</a>
          <a href={cv} target="_blank" className='rounded-md px-4 py-3 text-rose-700 border border-rose-700 hover:bg-rose-100 active:bg-rose-200'>Descargar CV</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
