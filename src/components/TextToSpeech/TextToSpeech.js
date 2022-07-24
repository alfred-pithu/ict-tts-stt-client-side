import React from 'react';

const TextToSpeech = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center        '>

            <div className=' relative'>

                <p className='text-center'>Write Here</p>

                <textarea class="my-8 textarea textarea-bordered border-gray-400 border-3 rounded-md w-[300px] 
                md:w-[600px] h-40" placeholder=""></textarea>

                <br />

                <button class="btn btn-sm absolute right-0">Generate Audio</button>



            </div>

            <div className='mt-20'>
                <h1>Audio Here</h1>
            </div>


        </div>
    );
};

export default TextToSpeech;