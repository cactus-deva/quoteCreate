
export default function SearchQuote (props) {
    const {onSubmit, term, setTerm} = props
    const handleChange = (e) =>{
        setTerm(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(term)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input value={term} onChange={handleChange} type="text" 
            className="rounded-2xl h-6 lg:h-9 w-[100px] sm:w-[180px] md:w-[200px] lg:w-[300px] xl:w-[400px] m-3 p-2 text-[9px] lg:text-[15px] text-black" placeholder="search quote" 
            />
        </form>
    )
}