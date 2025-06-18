import { Link } from "react-router-dom"

export default function Sidebar() {

    return (
        <div className='flex flex-col justify-between items-center h-full w-fit m-3'>
            <div className="flex flex-col items-center justify-start h-full w-[100px] md:w-[150px] xl:w-[220px]">
                <Link to="/RandomQuotePage" className="flex items-center justify-center rounded-2xl font-semibold bg-[#4CAF50] hover:bg-white hover:text-[#C1E1C1] hover:border-2 border-[#C1E1C1] p-2 
                h-[30px] sm:h-[40px] md:h-[50px] 2xl:h-[70px] w-[100px] sm:w-[100px] md:w-[180px] lg:w-[170px] 2xl:w-[200px] text-white text-center">
                    Random Quote
                </Link>

                <div className="flex flex-col items-center h-[100px] w-full mt-3 text-white font-bold">
                    <h1>Follow us:</h1>
                    <div className="flex justify-around items-baseline w-full m-3">
                        <a href="https://www.facebook.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                                <path fill="#4267B2" d="M22.676 0H1.324C.593 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.324 24h11.495V14.708h-3.13v-3.628h3.13V8.412c0-3.1 1.89-4.79 4.65-4.79 1.324 0 2.463.1 2.795.143v3.242l-1.917.001c-1.503 0-1.795.715-1.795 1.763v2.312h3.59l-.467 3.628h-3.123V24h6.126c.729 0 1.324-.594 1.324-1.326V1.326C24 .594 23.406 0 22.676 0z" />
                            </svg>
                        </a>

                        <a href="https://x.com/home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#1DA1F2" d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.573 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.554-3.594-1.554-2.717 0-4.92 2.203-4.92 4.917 0 .385.045.76.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.374 3.946 4.829-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.089.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.17-.067C2.29 21.29 5.017 22 7.94 22c9.548 0 14.762-7.918 14.762-14.776 0-.224-.005-.448-.016-.671.998-.72 1.868-1.62 2.568-2.644z" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <defs>
                                    <linearGradient id="ig-gradient-small" x1="4.996" x2="20.308" y1="4.996" y2="20.308" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#f58529" />
                                        <stop offset="50%" stopColor="#dd2a7b" />
                                        <stop offset="100%" stopColor="#8134af" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#ig-gradient-small)" d="M17.138 2H6.862A4.867 4.867 0 002 6.862v10.276A4.867 4.867 0 006.862 22h10.276A4.867 4.867 0 0022 17.138V6.862A4.867 4.867 0 0017.138 2zM12 17.25a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5zm7.5-12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
                            </svg>
                        </a>

                        <a href="https://www.youtube.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#FF0000" d="M23.499 6.203a2.998 2.998 0 00-2.117-2.118C19.643 3.5 12 3.5 12 3.5s-7.643 0-9.382.585A2.998 2.998 0 00.5 6.203C0 7.94 0 12 0 12s0 4.06.5 5.797a2.998 2.998 0 002.118 2.118C4.357 20.5 12 20.5 12 20.5s7.643 0 9.382-.585a2.998 2.998 0 002.117-2.118C24 16.061 24 12 24 12s0-4.06-.501-5.797zM9.75 15.267v-6.534L15.75 12l-6 3.267z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

