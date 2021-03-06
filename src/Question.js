import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false)
  const showInfo = () => {
    setShow(!show)
  }
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => showInfo()}>
          {show ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {show ?
        <p>{info}</p> :
        ''}
    </article>
  )
};

export default Question;
