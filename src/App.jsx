import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [symbol, setSymbol] = useState(false)
  const [number, setNumber] = useState(false)
  const [upperCase, setupperCase] = useState(false);
  const [lowerCase, setlowerCase] = useState(false);


  function includeNumber(e) {
    setNumber(e.target.checked);

  }
  function includeSymbol(e) {
    setSymbol(e.target.checked);

  }
  function includeupperCase(e) {
    setupperCase
    (e.target.checked);

  }
  function includelowerCase(e) {
    setlowerCase(e.target.checked);

  }

  useEffect(() => {
    generatePassword()
  }, [number, symbol, length, upperCase, lowerCase])

  function copyText() {
    navigator.clipboard.writeText(password)

  }

  function generatePassword() {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyz'
    if (upperCase) {
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (number) {
      str += '0123456789'
    }
    if (symbol) {
      str += '!@#$%^&*()_+=}{"|?><:'
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length)
      let char = str.charAt(randomNumber)
      pass += char

    }
    setPassword(pass);

  }

  return (
    < >
      <style>
        {`
        body {
          background-color:rgb(203, 213, 225) ;
        }
      `}
      </style>
      <div className=''>
        <h1 className='text-3xl text-center mt-8 mb-8 font-serif font-bold '>Password Generator</h1>
        <div className="flex items-center justify-between w-5/6 md:w-5/6 lg:w-1/2 py-8 px-12 shadow-2xl mx-auto bg-slate-100 rounded-t-3xl border-b-8">
          <div>
            <h2 className="text-2xl font-semibold font-sans  break-before-column">{password}</h2>
          </div>
          <div className="flex items-center justify-center gap-10 mt-4 md:mt-0">
            <button onClick={copyText}>
              <i className="fa-solid fa-copy text-3xl"></i>
            </button>
          </div>
        </div>

        <div className="bg-white w-5/6 md:w-5/6 lg:w-1/2 rounded-3xl mx-auto shadow-2xl mt-8">
          <div className="flex items-center">
            <p className="bg-white text-xl font-extrabold py-4 pl-12 font-serif rounded-t-3xl">Customize your password</p>
          </div>
          <hr className="border-b-2 w-5/6 md:w-5/6 mx-auto" />

          <div className="bg-white flex flex-col md:flex-row items-center justify-between py-2 px-2 rounded-b-3xl">
            <div className="p-6">
              <p className="pb-4 text-lg font-semibold">Password Length</p>
              <label htmlFor="length" className="border border-gray-400 px-4 mr-4 py-1 rounded-md text-xl font-bold">{length}</label>
              <input type="range"  id='length' min={8} max={20} onChange={(e) => setLength(e.target.value)} value={length} />
            </div>

            <div className="flex flex-col md:flex-col mt-4 md:mt-0">
              <div className="mr-6">
                <input className="mr-2" type="checkbox" id="number" onChange={includeupperCase} />
                <label htmlFor="number" className="text-md font-semibold pb-1">Uppercase</label>
              </div>
              <div className="mr-6">
                <input className="mr-2" type="checkbox" id="number" onChange={includelowerCase} />
                <label htmlFor="number" className="text-md font-semibold pb-1">Lowercase</label>
              </div>
              <div className="mr-6">
                <input className="mr-2" type="checkbox" id="number" onChange={includeNumber} />
                <label htmlFor="number" className="text-md font-semibold pb-1">Number</label>
              </div>
              <div>
                <input className="mr-2" type="checkbox" id="symbol" onChange={includeSymbol} />
                <label htmlFor="symbol" className="text-md font-semibold pb-1">Symbols</label>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
