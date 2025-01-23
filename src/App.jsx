
import './App.css'

function App() {

  return (
    <>
       <div class="container">
        <header>
            <nav>
                
                <input type="checkbox" id="check"/>
               
                <label for="check" id="close">
                    <i class="fas fa-times"></i>
                </label>
               
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <img src="../src/images/logo_headphones.png" alt="logo"/>
                <ul>
                    <li><a href="#">what we do</a></li>
                    <li><a href="#"> results</a></li>
                    <li><a href="#">contact us</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <h1 class="title"> Lorem ipsum dolor sit amet,Lorem ipsum </h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum.</p>
                <button>CALL TO ACTION</button>
                <div class="first-div">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at eligendi nesciunt earum, vero assumenda aperiam, consectetur mollitia sapiente veritatis, dicta praesentium quas dolorem? Sint quas eveniet eum ullam ad, sit illo similique laudantium ipsam facere magnam amet animi incidunt impedit ut praesentium vel! Illo at earum aut delectus quod.</p>
                </div>
            </section>
            <section class="info-section">
                <h1 class="title"> What we do...</h1>
                <div class="first-div">
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio. Omnis, facilis reiciendis ea veritatis provident voluptates nemo soluta dicta repellendus accusantium blanditiis, quas minus fuga asperiores unde, vitae pariatur molestiae fugit cupiditate distinctio! Illum vel iusto harum, aut iure nihil quod quam beatae laudantium!
                    </p>
                </div>
                <div id="avatar">
                  <div>
                    <img src="../src/images/sound-frecuency.png"/>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>  
                  <div>
                    <img src="../src/images/video.png"/>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div> 
                  <div>
                    <img src="../src/images/music.png"/>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div> 
                  <div>
                    <img src="../src/images/hearing.png"/>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div> 
                </div>
            </section>
            <section id="result-section">
                <h1 class="title">Our results speak for themselves</h1>
                <div class="first-div">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis nemo saepe natus aspernatur provident, sapiente rem? Optio, neque! Ab nisi facilis eum dolorem distinctio suscipit nobis corporis voluptates beatae ex consectetur, cupiditate rerum facere.</p>
                </div>
                    <div class="container-result">
                        <div class="pentagon-1"></div>
                        <div class="pentagon-2"></div>
                        <div class="pentagon-3"></div>
                        <div class="pentagon-4"></div>
                    </div>
            </section>
            <section id="contact-form">
                <h1 class="title">Contact us</h1>
                    <form>
                        <label>Name</label>
                        <br/>
                        <input type="text"/>
                        <br/>
                        <label>Email</label>
                        <br/>
                        <input type="email"/>
                        <br/>
                        <label>Your Message</label>
                        <br/>
                        <input type="text"/>
                        <br/>
                        <button type="submit">CALL TO ACTION</button>
                    </form>
            </section>
        </main>
        <footer>
            <section>
                <div>
                    <img src="../src/images/logo_headphones.png" alt="logo" />
                    <div>
                        <img src="../src/images/instagram.png"/>
                        &nbsp; &nbsp;
                        <img src="../src/images/twitter.png"/>
                        &nbsp; &nbsp;
                        <img src="../src/images/facebook.png  " />
                    </div>
                </div>
                <p>©headphones 2020</p>
            </section>
        </footer>
    </div>
    </>
  )
}

export default App
