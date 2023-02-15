import React,{useState} from 'react'
import Accordion from './Accordion'
import {question} from './FakeData'
import './Index.css'


const Index = () => {
    const [data] = useState(question)
    return (
    <div className='index'>
        <h1>Accordion</h1>
        {
            data.map((element)=>{
                return <Accordion key={element.id} {...element}/>
            })
        }    
    </div>
  )
}

export default Index