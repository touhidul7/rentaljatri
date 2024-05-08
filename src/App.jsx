import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/* 
$(document).ready(function(){
  $('#toggle').change(function(){
    if($(this).is(':checked')){
      $('.toggle-dot').addClass('translate-x-full ');
    } else {
      $('.toggle-dot').removeClass('translate-x-full ');
    }
  });
});

 $(document).ready(function(){
  $('#toggle').change(function(){
    if($(this).is(':checked')){
      $('.toggle-line').addClass(' toggle-line2 ');
    } else {
      $('.toggle-line').removeClass(' toggle-line2 ');
    }
  });
}); 


  $(document).ready(function(){
    $('#toggle').change(function(){
      if($(this).is(':checked')){
        $('#hiddenDiv1, #hiddenDiv2').removeClass('hidden');
      } else {
        $('#hiddenDiv1, #hiddenDiv2').addClass('hidden');
      }
    });
  });


  $(document).ready(function(){
    $('#toggleIcon').click(function(){
      $('#hiddenDiv3, #hiddenDiv4, #hiddenDiv5, #hiddenDiv6').toggleClass('hidden');
    });
  }); */



  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <input type="checkbox" className="toggle" checked />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
