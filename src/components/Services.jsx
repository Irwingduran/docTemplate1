import React, { useState } from 'react';


const Services = () => {
  const services = [
    {
      id: 'urologia-general',
      title: 'Cirugía General',
      description: 'Evaluación y tratamiento de condiciones urológicas comunes.',
      image: '/trash/image3.jpg',
      path: '/landing1', 
    },
    {
      id: 'cirugia-holep',
      title: 'Cirugía Laparoscópica',
      description: 'HoLEP es el último y más avanzado tratamiento mínimamente invasivo que existe para tratar el agrandamiento benigno de la próstata.',
      image: '/trash/image4.jpg',
    },
    {
      id: 'cancer-prostata',
      title: 'Cirugía HoLEP',
      description: 'Diagnóstico y tratamiento del cáncer de próstata.',
      image: '/trash/image7.jpg',
    },
  ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto' id='service'>
      <div className='mt-20 md:w-1/2 mx-auto text-center '>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Servicios</h2>
        <p className='text-neutralDGrey'>Especialista en enfermedad benigna y maligna de la próstata</p>
      </div>

        <div>
          
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-4">{service.description}</p>
        
        
             
            </div>
            
          </div>
        ))}
      </div>
      </div>

      
      <div className='px-4 lg:px-14 mx-w-screen-2x1 mx-auto bg-white py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
          
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>
              Otros Servicios
            </h2>
            <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia de pene o piel escrotal</h4>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia endoscópica de la uretra</h4>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia endoscópica vesical múltiple</h4>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia endoscópica vesical y uretral única</h4>
                </div>
              </div>
          </div>

          {/*  stats  */}        
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-1'>
            <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia prostática perineal</h4>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia prostática transrectal</h4>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia punción prostática ecodirigida</h4>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                   <img src="/logos/point.png" width="10px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Biopsia punción testicular</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-white py-16'>
        <div className='flex items-center justify-center lg:w-2/3 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5x1 text-2xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                    Mira las opiniones verificadas de nuestros pacientes
                </h2>
                <div className='flex items-center justify-center gap-8'>
                <a href="https://www.google.com/maps/place/Dr.+Bruno+Rubí,+Cirujano+Urólogo/@19.0212342,-98.2347385,3271m/data=!3m1!1e3!4m8!3m7!1s0x8428aff80c0575ef:0xf3628b313ac0c63a!8m2!3d19.0212342!4d-98.2347385!9m1!1b1!16s%2Fg%2F11q8pwtrvz?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D">
                    <button href="https://www.doctoralia.com.mx/bruno-rubi-lopez-2/urologo/puebla" className='btn-primary text-white'>Ir a comentarios
                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none' className='inline-block ml-2'>
                        <path d='M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004' stroke='white' />
                        </svg>
                        
                    </button></a>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default Services;
