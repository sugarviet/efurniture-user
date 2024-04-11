import Navbar from '../../components/Navbar'
import Footer from "@components/Footer";
import { useErrorBoundary } from "react-error-boundary";
const Error = () => {
    const { resetBoundary } = useErrorBoundary();

    return (
        <div className="font-HelveticaRoman" onClick={resetBoundary}>
                <Navbar />
            <div className='flex flex-col justify-center items-center mt-16 gap-3'>
                <h1>Oops! something went wrong</h1>
                <p className='text-lg font-bold text-slate-700'>Please try again</p>
                <button
                    onClick={resetBoundary}
                    className='furniture-button-black-hover px-4 py-2'>Try again</button>
            </div>
            
                <Footer />
        

        </div>
    )
}

export default Error