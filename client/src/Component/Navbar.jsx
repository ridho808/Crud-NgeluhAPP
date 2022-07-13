import React,{Component} from 'react';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            Navigasi : false
        }
        this.NavMobile = this.NavMobile.bind (this);
    }
    NavMobile(){
        this.setState({Navigasi : !this.state.Navigasi})
    }
    componentDidMount(){
        this.NavMobile()
    }
    render(){
        return(
           <div className='flex max-w-[890px] mx-auto h-16 border-b-2 border-black'>
                <div className='flex flex-row justify-between w-full h-full items-center z-0 bg-white'>
                    <Link to={'/'} className='text-2xl p-3 text-black font-bold'></Link>
                    <ul className='hidden sm:flex flex-row justify-evenly p-3'>
                        <li className='p-4 font-bold'>
                            <Link to={'/'}>HOME</Link>
                        </li>
                        <li className='p-4 font-bold'>
                            <Link to={'/'}>ABOUT</Link>
                        </li>
                    </ul>
                    <div className='flex p-3 sm:hidden' onClick={this.NavMobile}>
                        {this.state.Navigasi ? <AiOutlineMenu size={25} fill="black"/> : <AiOutlineClose size={25} fill='black'/>}
                    </div>  
                </div>
                <div className={this.state.Navigasi ? 'hidden' : " absolute left-0 top-0 w-[40%] bg-white h-screen sm:hidden z-50"}>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl text-black border-b-2 border-black p-3 h-16 pt-4 font-bold'>NGEBPR</h1>
                        <ul className='flex flex-col justify-evenly w-full'>
                            <li className='text-2xl p-4'>
                                <Link to={'/'}>HOME</Link>
                            </li>
                            <li className='text-2xl p-4'>ABOUT</li>
                        </ul>
                    </div>
                </div>
           </div>
           
        )
    }
}

export default Navbar;