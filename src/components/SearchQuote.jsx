
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
            <input value={term} onChange={handleChange} type="text" className="rounded-2xl m-3 h-9 w-30 p-2 border-black-3" placeholder="search quote" />
        </form>
    )
}