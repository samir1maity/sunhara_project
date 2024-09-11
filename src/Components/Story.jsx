/** @format */

const Story = () => {
  return (
    <div className='bg-white py-16' id='story'>
      <h2 className='text-4xl font-bold text-center text-pink-700 mb-12'>
        Our Story
      </h2>
      <div className='relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Story item */}
        <div className='flex flex-col md:flex-row items-center md:justify-end md:relative'>
          <div className='md:w-1/2 md:order-2 flex justify-center md:justify-end'>
            <img
              src='your-image-url'
              alt='First Meet'
              className='w-full md:w-4/5 rounded-lg shadow-lg'
            />
          </div>
          <div className='md:w-1/2 bg-[#c5c3a8] p-6 rounded-lg shadow-lg mt-6 md:mt-0'>
            <h3 className='text-2xl font-semibold'>First Meet</h3>
            <p className='text-sm text-red-500'>01 JAN 2050</p>
            <p className='mt-2 text-gray-700'>
              Lorem elit magna stet rebum dolores sed. Est stet labore est lorem
              lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem,
              stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elit.
            </p>
          </div>
          <div className='hidden md:block absolute top-1/2 right-0 h-4 w-4 bg-pink-600 rounded-full -mt-2 md:-mr-2'></div>
        </div>

        {/* Story item */}
        <div className='flex flex-col md:flex-row items-center md:relative'>
          <div className='md:w-1/2 flex justify-center md:justify-start'>
            <img
              src='your-image-url'
              alt='First Date'
              className='w-full md:w-4/5 rounded-lg shadow-lg'
            />
          </div>
          <div className='md:w-1/2 bg-[#c5c3a8] p-6 rounded-lg shadow-lg mt-6 md:mt-0'>
            <h3 className='text-2xl font-semibold'>First Date</h3>
            <p className='text-sm text-red-500'>01 JAN 2050</p>
            <p className='mt-2 text-gray-700'>
              Lorem elit magna stet rebum dolores sed. Est stet labore est lorem
              lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem,
              stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elit.
            </p>
          </div>
          <div className='hidden md:block absolute top-1/2 left-0 h-4 w-4 bg-pink-600 rounded-full -mt-2 md:-ml-2'></div>
        </div>

        {/* Additional Story items can be added similarly */}

        {/* Connecting lines */}
        <div className='absolute top-0 bottom-0 w-1 bg-pink-600 left-1/2 transform -translate-x-1/2 md:left-auto md:right-1/2 md:translate-x-1/2'></div>
      </div>
    </div>
  );
};

export default Story;
