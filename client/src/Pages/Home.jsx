import React,{Component} from 'react';
import Axios from 'axios';
import Navbar from '../Component/Navbar';

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            Post: [{}]
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:3033/').then((response)=>{
            const User = response;
            this.setState({Post : User.data})
        }).catch(error => {
            return error
        })
    }
    render(){
        return(
            <>
                <header>
                    <Navbar/>
                </header>
                <main className='overflow-auto pt-[4em] h-[650px]'>
                    {
                        this.state.Post.map((response,i) => {
                            return (
                                <div key={i} className='max-w-[250px] h-[200px] mx-auto flex flex-col m-3 bg-neutral-300 rounded-[30px]'>
                                    <div className='flex flex-col justify-evenly items-center text-center mb-2'>
                                    <img src="https://img.icons8.com/ios-filled/240/000000/user.png" className='object-cover w-[50px] h-[50px]' alt="foo"/>
                                    <h1 className='text-black'>Anonim</h1>
                                    </div>
                                    <p className='text-center text-sm text-black'>
                                        "{response.Message}"
                                    </p>
                                </div>
                            )
                        })
                    }
                </main>
                <footer>

                </footer>
            </>
        )
    }
}

export default Home;