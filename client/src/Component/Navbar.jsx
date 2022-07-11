import React,{Component} from 'react';
import {AiFillHome,AiFillInfoCircle,AiOutlinePlus} from "react-icons/ai";
class Navbar extends Component{
    render(){
        return(
            <nav className='fixed w-full flex justify-between z-50'>
                <div className='fixed h-16 top-0 w-full backdrop-blur-xl flex flex-row justify-between items-center bg-black/40'>
                    <h1 className='text-3xl text-center w-full text-black font-bold'>NGELH</h1>
                </div>
                <ul className='fixed h-16 flex justify-evenly w-full bottom-0 rounded-tl-[15px] rounded-tr-[15px] backdrop-blur-xl bg-black/40'>
                    <li className='p-3 mx-3'><AiFillHome size={40} fill='black'/></li>
                    <li className='p-2 absolute bottom-9 bg-[#db1415] rounded-[360px] '> <AiOutlinePlus size={40} fill="white"/> </li>
                    <li className='p-3 mx-3'><AiFillInfoCircle size={40} fill='black'/></li>
                </ul> 
            </nav>
        )
    }
}

export default Navbar;