import React from 'react'
import './Myrecentproject.css'
import todoapp from '../../assets/todoapp.png'
import readux from '../../assets/redux.png'
import MERN from '../../assets/MERN.png'
import Authentication from '../../assets/Authentication.png'
import linenotify from '../../assets/linenotify.png'
import { AiFillGithub } from "react-icons/ai";

function Myrecentproject() {
    return (
        <div className='container-Myrecentproject'>
            <div className="header">
                <h1>My Recent Project</h1>
                <p>Here are a few projects I've worked on recently.</p>
            </div>
            <div className="project">
                <div className="card" >
                    
                    <img src={todoapp} alt='todoapp' width={250} />
                    <div className="text-title">
                        <h2>Todo App</h2>
                        <p>This project is the first project,Learn to codeing react useRuducer useContext for global state and be the first project to start codeing React. Features in this app will be CRUD APP.</p>
                    </div>
                    <div className="btn">
                        <button><a href="https://github.com/wat26483/my-react-todo-app" target="_blank" rel="noopener noreferrer"><AiFillGithub/> GITHUB</a></button>
                    </div>
                </div>
                <div className="card">
                    <img src={readux} alt='readux' width={250} />
                    <div className="text-title">
                        <h2>Shoping Page App</h2>
                        <p>The technology for this project is REDUX toolskit and uses API Fake Store API. Features in this app Add to cart,Store quantity,Choose the number of products increase or decrease in cart and responsive web design</p>
                    </div>
                    <div className="btn">
                        <button><a href="https://github.com/wat26483/react-redux-pageshopping-api" target="_blank" rel="noopener noreferrer"><AiFillGithub/> GITHUB</a></button>
                    </div>
                </div>
                <div className="card">
                    <img src={MERN} alt='MERN' width={250} />
                    <div className="text-title">
                        <h2>MERN Stack CRUD </h2>
                        <p>Technology in project React MongoDB Express NodeJS Features in this app are Add Update Delete Edit and Update to MongoDB responsive web design. Features Backend API Get Put Post Delete</p>
                    </div>
                    <div className="btn">
                        <button><a href="https://github.com/wat26483/MERN-Stack-CRUD" target="_blank" rel="noopener noreferrer"><AiFillGithub/> GITHUB</a></button>
                    </div>
                </div>
                <div className="card">
                    <img src={Authentication} alt='Authentication' width={250} />
                    <div className="text-title">
                        <h2>Authentication App </h2>
                        <p>Technology in project React and API Platzi Fake Store API. Features in app is use API Authentication Login register ,API get or post products and responsive web design</p>
                    </div>
                    <div className="btn">
                        <button> <a href="https://github.com/wat26483/react-api-jwt-authentication" target="_blank" rel="noopener noreferrer"><AiFillGithub/> GITHUB</a></button>
                    </div>
                </div>
                <div className="card">
                    <img src={linenotify} alt='linenotify' width={250} />
                    <div className="text-title">
                        <h2>LINE notify API</h2>
                        <p>This project was created for funny use only me for notifications a LINE chat me and update database. When someone contacts me by this web portfolio </p>
                    </div>
                    <div className="btn">
                        <button><a href="https://github.com/wat26483/api-contactme" target="_blank" rel="noopener noreferrer"><AiFillGithub/> GITHUB</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myrecentproject