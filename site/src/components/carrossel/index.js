import { useEffect } from 'react'
import './index.scss'
import carrossel from './script'



export default function Slider() {




  useEffect(() => {
    carrossel()
  }, [])

  return (

    <div className='seila'>
      
      <section className='f1'>

      <div className='slider'>
        <div className='slides'>
          <input type='radio' name='radio-btn' id='radio1' />
          <input type='radio' name='radio-btn' id='radio2' />
          <input type='radio' name='radio-btn' id='radio3' />
          <input type='radio' name='radio-btn' id='radio4' />



          <div className='Slide first'>
            <img src='/assets/images/geral/mdl1.png' alt='' />
          </div>

          <div className='Slide'>
            <img src='/assets/images/geral/mdl2.png' alt='' />
          </div>

          <div className='Slide'>
            <img src='/assets/images/geral/mdl3.png' alt='' />

          </div>
          <div className='Slide'>
            <img src='/assets/images/geral/mdl4.png' alt='' />
          </div>

          <div className='navegation-auto'>
            <div className='auto-btn1'></div>
            <div className='auto-btn2'></div>
            <div className='auto-btn3'></div>
            <div className='auto-btn4'></div>
          </div>

        </div>

        <div className='manual-navegation'>
          <label for='radio1' className='manual-btn'></label>
          <label for='radio2' className='manual-btn'></label>
          <label for='radio3' className='manual-btn'></label>
          <label for='radio4' className='manual-btn'></label>
        </div>


      </div>
    </section>

    </div>

  )


}




