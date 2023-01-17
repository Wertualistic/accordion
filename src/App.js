import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions and answers</h3>
        <section className="info">
          {question.map((text) => {
            return(
              <SingleQuestion
                key={text.id}
                {...text} />
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
