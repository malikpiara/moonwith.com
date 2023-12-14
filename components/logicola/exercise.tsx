const Exercise = () => {
  return (
    <div className='max-w-7xl p-6 bg-white border border-slate-200 rounded-lg mb-6'>
      <h3 className='mb-2 text-xl font-bold tracking-tight text-slate-900'>
        1.
      </h3>
      <hr className='h-px my-4 bg-slate-200 border-0'></hr>
      <div className='mx-auto w-full max-w-screen-xl p-4'>
        <div className='md:flex flex-col md:justify-between gap-5'>
          <div className='flex flex-col sm:gap-72 self-center mb-6 text-lg'>
            <div>Not both A and B</div>
          </div>

          <div className='flex items-center border border-slate-200 rounded-lg'>
            <button className='w-full ps-4 text-green-600  focus:ring-green-500 focus:ring-2'>
              <div className='flex'>
                <div className='py-4 ms-2 text-sm font-medium text-slate-600'>
                  ~(A Ʌ B)
                </div>
              </div>
            </button>
          </div>

          <div className='flex items-center border border-slate-200 rounded-lg'>
            <button className='w-full ps-4 text-green-600  focus:ring-green-500 focus:ring-2'>
              <div className='flex'>
                <div className='py-4 ms-2 text-sm font-medium text-slate-600'>
                  ~(A · B)
                </div>
              </div>
            </button>
          </div>

          <div className='flex items-center border border-slate-200 rounded-lg'>
            <button className='w-full ps-4 text-green-600  focus:ring-green-500 focus:ring-2'>
              <div className='flex'>
                <div className='py-4 ms-2 text-sm font-medium text-slate-600'>
                  (~A · ~B)
                </div>
              </div>
            </button>
          </div>

          <div className='flex items-center border border-slate-200 rounded-lg'>
            <button className='w-full ps-4 text-green-600  focus:ring-green-500 focus:ring-2'>
              <div className='flex'>
                <div className='py-4 ms-2 text-sm font-medium text-slate-600'>
                  (~A Ʌ ~B)
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <hr className='h-px my-4 bg-slate-200 border-0'></hr>
      <button
        type='button'
        className='text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
      >
        Check answer
      </button>
    </div>
  );
};

export default Exercise;
