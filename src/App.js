
import './App.css';
import React,{useState} from 'react';

function App() {
  const [select,setSelect]=useState(null)

  const toggle = (i) =>{
    if(select === i){
      return setSelect(null)
    }
    setSelect(i)  
  }
  return (
    <div className='wrapper'>
      {/* <div className='recangle2808'> */}
        <div className='rectangle2807'>
        {data.map((item, i)=>(
          <div className='item'>
            <div className='rectangle2808'>
            <div className='title' onClick={()=>toggle(i)}>
            <h2>{item.disease}
            <span>{select === i ? '-' : '+' }  </span></h2>
            
            
            <div className={select === i ? 'content show' : 'content'}>
              {item.answer}
          </div>
          </div>
           </div></div>
        ))}
      </div>
      </div>
    //  </div>  
  )
}

const data = [
  {
    disease : 'Diabetes',
    answer : 
      'Aliqua do veniam quis cupidatat voluptate reprehenderit sit nostrud aliqua quis aliqua. Labore laboris excepteur cupidatat Lorem ad. Nisi excepteur elit Lorem consectetur culpa adipisicing id amet enim irure proident magna dolore consequat. Esse dolor sit eiusmod anim enim enim occaecat enim et sint aliquip. Consectetur amet voluptate id labore exercitation ipsum. Nulla in culpa duis consequat. Tempor qui sint occaecat reprehenderit deserunt exercitation sit adipisicing consequat est.'
  },
  {
    disease : 'Allergies',
    answer :
    'Esse ex ex tempor irure incididunt ad est. Voluptate aliqua fugiat sit magna do consectetur sit elit anim ex sunt adipisicing pariatur. Duis officia irure aliquip excepteur voluptate amet duis deserunt ipsum qui.'
  },
  {
    disease : 'Hypertension',
    answer : 
    'Magna minim fugiat cillum cillum ad proident dolore pariatur excepteur id. Dolor reprehenderit officia voluptate occaecat qui. Ex aliquip aliquip ea cillum et ut ullamco. Cupidatat esse occaecat esse duis dolore pariatur minim adipisicing eiusmod. Voluptate dolore voluptate excepteur quis mollit occaecat id elit aliquip eiusmod ad velit cillum nisi. Ut veniam commodo eu nostrud adipisicing. Reprehenderit do occaecat magna sint commodo veniam voluptate.'
  }
]

export default App;
