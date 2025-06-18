import Lottie from "lottie-react"
import loader from "../assets/loader.json"

export const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
            <Lottie animationData={loader} loop={true}
            className="w-[100px] md:w-[250px] h-[100px] md:h-[250px]" />
        </div>
    )
}