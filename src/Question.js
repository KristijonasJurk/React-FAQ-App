import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false)
  const showInfo = () => {

  }
  if (show === false) {
    return (
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button className="btn">
            <AiOutlinePlus onClick={() => showInfo()} />
          </button>
        </header>
        <p>{info}</p>
      </article>
    )
  }
  if (show === true) {
    return (
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button className="btn">
            <AiOutlineMinus onClick={() => showInfo()} />
          </button>
        </header>
      </article>
    )
  }
};

export default Question;
