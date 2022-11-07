import React from 'react'
import {useState, useEffect ,useRef} from 'react'
import "./Home.css"
import Footer from './Footer'

function Home() {
 
  const [time , setTime]=useState("")
  const [showChat,setShowChat] = useState(false)
  const [isSended,setIsSended]=useState(false)
  const [question,setQuestion]=useState("")
  const chatFormEl = useRef(null);
  useEffect(()=>{
    document.querySelector(".bracket-one").textContent="{";
    document.querySelector(".bracket-two").textContent="};";
    document.querySelector(".index-html").textContent="<>";
  
  },[])
   useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString('de-DE'))
    },1000)
    document.querySelector(".chat-input").focus();
  },[time,showChat]) 
 
  function chatHandler (){
    setShowChat(!showChat)
  
  }
 function questionHandler(e){
  setQuestion(e.target.value)
 }
 function sendHandler (){
   setIsSended(true)
   chatFormEl.current.reset()
 }
  
  return (
    <>
    <main>
        <section className='info'>
           
            <p className='paragraph-one'>Choose an online course that will move you forward ...</p>
             <p className='paragraph-two'> We are a leader in the field of online education and we are trusted by more than 70,000 users from companies, schools and state institutions.</p> 
             <button className='home-btn'>view online courses</button>
           
        </section>
        <section className='frame'>
          <div className="gray"></div>
          <div className="tab">
            <div className="display-frame"></div>
            <div className="html"><img src={require("../Images/html.png") } alt="" /></div>
            <div className="css"><img src={require("../Images/css.png") } alt="" /></div>
            <div className="js"><img src={require("../Images/js.png") } alt="" /></div>
            <div className="python"><img src={require("../Images/python.jpeg") } alt="" />
            </div>
            <div className="react"><img src={require("../Images/React.webp") } alt="" />
            </div>
            <div className="nodejs"><img src={require("../Images/nodejs.png") } alt="" />
            </div>
            <div className="display"></div>
            <div className="clock">{time}</div>
            <div className="firefox"><img src={require("../Images/firefox.webp")} alt="" />
            </div>
            <div className="vsc"><img src={require("../Images/vsc.png")} alt="" /></div>
            <div className="chrome"><img src={require("../Images/chrome.png")} alt="" />
            </div>
            <div className="pointer"><img src={require("../Images/pointer.png")} alt="" />
            </div>
            <div className="vsc-app">
              <div className="vsc-app-title">Visual Studio Code</div>
              <div className="vsc-toolbar"> <div>
                <span>File</span> <span>Edit </span><span>Terminal </span><span>Help</span></div>
                </div> 
              <div className="vsc-app-icons">
                <i className="fa-regular fa-file"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-code-branch"></i>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-bolt"></i>
              </div>
              <div className="vsc-app-workspace">
                <div>
                  <span className='index-html' style={{color:"orange"}}> </span>
              index.html</div>
              <div>
                  <span style={{color:"deepskyblue"}}># </span>
              index.css</div>
                  <div>
                  <span style={{color:"gold"}}>js </span>
              index.js</div>
                  </div>
              <div className="vsc-app-code-area"><div><span style={{color:"chocolate"}}>function </span>
              <span style={{color:"deepskyblue"}}>sum </span> <span style={{color:"gold"}}>(<span style={{color:"darkorange"}}>num1<span style={{color:"gold"}}>,</span>num2</span>)</span>
              <span className='bracket-one'></span></div> <div><span style={{color:"dodgerblue"}}>let</span> <span style={{color:"cadetblue"}}>result  </span> <span style={{color:"gold"}}> = </span><span style={{color:"darkorange"}}> num1 <span style={{color:"gold"}}>+</span> num2</span></div> <span style={{color:"hotpink"}}>return </span><span style={{color:"cadetblue"}}>result</span><div className='bracket-two'></div>
              <div><span style={{color:"gold"}}><span  style={{color:"deepskyblue"}}>console.</span>log(<span style={{color:"deepskyblue"}}>sum<span style={{color:"gold"}}>(</span><span style={{color:"darkorange"}}>56<span style={{color:"gold"}}>,</span>74</span><span style={{color:"gold"}}>)</span></span>);</span></div>
              <div className="cover-one"></div>
              <div className="cover-two"></div>
              <div className="cover-three"></div>
              <div className="cover-four"></div>
              <div className="cover-five"></div>
              </div>
              <div className="vsc-terminal-title"> <div> PROBLEMS DEBUG TERMINAL</div> 
                </div>
              <div className="vsc-terminal">Desktop/new-folder/  
              <div className='node'>

              <span style={{color:"gold"}}> nodemon </span>
              <span style={{color:"gray"}}>index.js</span>
              </div>
              <div className='result' style={{color:"gold"}}>130</div>
              <div className='cover-six'></div>
              </div>
            </div>
       
          </div>
        
          <div className={showChat? "chat":"chat-dl-none"}>
            <div className='chat-frame'>
              <div className='chat-title'>Send us your questions and you will response as soon as possible.</div>
              <div className={isSended? "question":"question-dl-none"}> {question}</div>
            </div>
            <form ref={chatFormEl} action="">
            <input className='chat-input' type="text" placeholder='write your message'  onChange={questionHandler} />
            </form>
            <button className='send-que-btn' onClick={sendHandler} ><i class="fa-solid fa-paper-plane"></i></button>
          </div>


          <div className='show-hide-chat' onClick={chatHandler}>
            {showChat?<div>x</div>:
            <div><i class="fa-regular fa-comments"></i></div>}

          </div>
        </section>
    </main>
        <Footer/>
    </>
  )
}

export default Home