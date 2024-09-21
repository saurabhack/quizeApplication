
function QuestionList({question,options,handleClick,selectOption}){
    return(
        <>
        <div className="h-[50%] w-[30%] border rounded-lg flex justify-center items-center bg-green-200">
            <div>
            <h1 className="text-2xl ">Q).{question}</h1>
            <br></br>
            {
                options.map((val,i)=>{
                    return <p onClick={()=>{
                        handleClick(val)
                    }} className={selectOption === val ? "text-xl m-2 p-2 rounded-md  bg-green-600 text-white    hover:cursor-pointer"  : "text-xl m-2 p-2 rounded-md text-slate-400 hover:bg-white hover:text-black  hover:cursor-pointer"} key={i}>{val}</p>
                })
            }
            </div>
        </div>
        </>
    )
}
export default QuestionList
"text-xl m-2 p-2 rounded-md text-slate-400 hover:bg-white hover:text-black  hover:cursor-pointer"