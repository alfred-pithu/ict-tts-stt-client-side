import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TextToSpeech = () => {

    const [url, setUrl] = useState('');
    const [inputText, setInputText] = useState('')

    const getAudio = (e) => {
        setInputText(' ')
        e.preventDefault()
        const input = e.target.inputText.value;
        setInputText(input)

    }



    return (
        <div className='h-screen flex flex-col justify-center items-center        '>

            <form onSubmit={getAudio} className=' relative'>

                <p className='text-center'>Write Here</p>

                <textarea name='inputText' className="my-8 font-bold text-xl textarea textarea-bordered border-gray-400 border-3 rounded-md w-[300px] 
                md:w-[600px] h-40" placeholder=""></textarea>

                <br />

                <input type='submit' className="btn btn-sm absolute right-0" value='Generate Audio'></input>

                {
                    inputText ?
                        <div className='bg-gray-600 border mt-10'>
                            <audio controls>
                                <source src={`http://localhost:5000/tts/${inputText}`} type="audio/ogg" />
                                <source src={`http://localhost:5000/tts/${inputText}`} type="audio/mpeg" />
                                Your browser does not support the audio tag.
                            </audio>
                        </div>
                        :
                        <p>Nothing yet</p>
                }



            </form>

            <div className='mt-20'>
                <h1>Audio Here</h1>
            </div>


        </div>
    );
};

export default TextToSpeech;