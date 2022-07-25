import React, { useEffect, useState } from 'react';

const TextToSpeech = () => {

    const getAudio = (e) => {
        e.preventDefault()
        const input = e.target.inputText.value;
        console.log(input);

        // here I will fetch the response by sending the text //

        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'Application/json',
        //     },
        //     body: JSON.stringify(textInput)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    }



    return (
        <div className='h-screen flex flex-col justify-center items-center        '>

            <form onSubmit={getAudio} className=' relative'>

                <p className='text-center'>Write Here</p>

                <textarea name='inputText' className="my-8 font-bold text-xl textarea textarea-bordered border-gray-400 border-3 rounded-md w-[300px] 
                md:w-[600px] h-40" placeholder=""></textarea>

                <br />

                <input type='submit' className="btn btn-sm absolute right-0" value='Generate Audio'></input>



            </form>

            <div className='mt-20'>
                <h1>Audio Here</h1>
            </div>


        </div>
    );
};

export default TextToSpeech;