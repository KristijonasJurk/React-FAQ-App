import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [question, setQuestion] = useState(data)


  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          <SingleQuestion key={question.id} {...data} />
        </section>
      </div>
    </main>
  )
}

export default App;
