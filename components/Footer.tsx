import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Footer() {
    return(
        <footer className="flex items-center justify-between p-7 bg-slate-700 h-32 mt-8 border-solid border-t-2 border-t-slate-950 text-cyan-50">
            <p>
                <span className="font-bold">PokeNext &copy; Leonardo D Ceretta</span>  
            </p>
            <div className='flex'>
                <a href='https://www.linkedin.com/in/leonardo-dallepiane-ceretta/'><AiFillLinkedin /></a>
                <a href='https://github.com/LeoCeretta' className='ml-3'><AiFillGithub /></a>
            </div>
        </footer>
    )
}