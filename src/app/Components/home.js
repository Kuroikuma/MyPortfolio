import Typewriter from 'typewriter-effect';
import logo from '../Assets/IMG-20210430-WA0013.jpg';
import "./home.style.css";

export const Home = () => {
  return ( 
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Soy Junior hurtado desarrollador frontEnd
        </h1>
      </header>
      <section>
        <div className="TypeWraper">
          <h2>
            Habilidades:
          </h2>
          <p>
            <Typewriter
            options={{
              strings: ['HTML', 'JavaScrip','Java','SqlServer','React js'],
              autoStart: true,
                loop: true,
            }}
          />  
          </p>
        </div>
       </section>
    </div>
   );
}