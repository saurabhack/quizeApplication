import QuestionList from "./QuestionLists"
import {useState} from "react"
function Quize(){
    const questions=[
        {
            question:"what is react",
            options:["library","framework","css framework","testing tool"],
            answer:"library"
        },
        {
            question:"father of c",
            options:["saurabh kamane","dennis retchie","samadhan pol","ravan"],
            answer:"dennis retchie"
        },
        {
            question:"what is html",
            options:["hyper text markup language","scripting language","programming language","pornographic language"],
            answer:"hyper text markup language"
        },
        {
            question:"why we use javascript",
            options:["for frontend","for playing","for fucking","for masturbation"],
            answer:"for frontend"
        }
    ]
    const [currenctIndex,setCurrentIndex]=useState(0)
    const [selectOption,setSelectOption]=useState(null)
    const [score , setScore]=useState(0)
    const handleClick=(option)=>{
        setSelectOption(option)
        if(option===questions[currenctIndex].answer){
            setScore(score+1)
        }
    }
    return(
        <>
        {
            currenctIndex < questions.length ? (
                <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col bg-blue-500">
        <QuestionList question={questions[currenctIndex].question} options={questions[currenctIndex].options} handleClick={handleClick} selectOption={selectOption}/>
        <button disabled={selectOption===null}  className={selectOption===null ? "bg-white p-2 w-[10rem] m-2 text-slate-400 rounded-md " : "bg-green-400 p-2 rounded-md w-[10rem] text-white m-2"} onClick={()=>{
            setCurrentIndex(currenctIndex+1)
            setSelectOption(null)
        }}>Next</button>
        </div>
            ) :(
                <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col bg-blue-500">
                <div className="h-[50%] w-[30%] border rounded-lg flex justify-center items-center bg-green-200">
                <h1>quiz over and your score is = {score}</h1>
                </div>
            </div>
        )
        }
        
        </>
    )
}
export default Quize
