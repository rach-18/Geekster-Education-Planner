function SubjectDetails({subject, hour, increase, decrease, index}) {
    return (
        <div className="flex gap-2 w-full items-center justify-center">
            <p>{subject} - {hour} Hours</p>
            <button className="bg-green-600 text-white w-[2%] rounded-md" onClick={() => {increase(index)}}>+</button>
            <button className="bg-red-600 text-white w-[2%] rounded-md" onClick={() => {decrease(index)}}>-</button>
        </div>
    )
}

export default SubjectDetails;
