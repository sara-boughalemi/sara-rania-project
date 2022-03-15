import "./header.css";

export default function header({setSearch}) {
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div className="header">
            <input type="search" placeholder="Search Blog... " onChange={handleChange}/>
            <i className="fa fa-search"></i>
        </div>
    );
}
