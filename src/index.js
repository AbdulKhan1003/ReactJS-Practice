import React from 'react'
//ye abhi kaam ni aayega but compilation me use hoga jb JSX code JS me change hoga
import ReactDom from 'react-dom/client'
import App from './app';



const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<App />)