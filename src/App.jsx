import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [background, setBackground] = useState()

  useEffect(() => {
    // Set background color directly on the div with the "mainpart" class
    const mainPartElement = document.querySelector('.mainpart')
    if (mainPartElement) {
      mainPartElement.style.backgroundColor = background
    }
  }, [background])

  const bgChange = (color) => {
    setBackground(color)
  }

  return (
    <div className="mainpart d-flex justify-content-center align-items-center flex-column" style={{ padding: 'auto' }}>
      <h1 className='pb-5 fw-bolder'>Background Changer</h1>
      <em className="text-secondary pb-3">Select the background colour</em>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        <button className="btn btn-light me-3 text-danger fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('red')} type="button">Red</button>
        <button className="btn btn-light me-3 text-success fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange("green")}>Green</button>
        <button className="btn btn-light me-3 text-secondary fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange("grey")}>Grey</button>
        <button className="btn btn-light me-3 fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange("black")}>Black</button>
        <button className="btn btn-light me-3 text-warning fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange("yellow")}>Yellow</button>
        <button className="btn btn-light me-3 text-primary fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange("blue")}>Blue</button>
        <button className="btn btn-light me-3 fw-bolder mb-3" style={{ width: '120px'}} onClick={() => bgChange("white")}>Reset</button>
      </div>
    </div>
  )
}

export default App
