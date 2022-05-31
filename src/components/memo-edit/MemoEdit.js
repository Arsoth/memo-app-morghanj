import {useState} from "react";

export function MemoEdit({memoContents, setMemo, memoList, setMemoList}) {

    const [formState, setFormState] = useState({
        title: memoContents.title,
        desc: memoContents.desc,
        date: memoContents.date,
        finished: memoContents.finished
    });


    function onFormSubmit(event) {
        event.preventDefault()
        let temp = memoList
        let memoPos = memoList.indexOf(memoContents)
        temp[memoPos] = formState
        setMemoList([...temp])
        setMemo(null)
    }

    function onTitleChange(event) {
        setFormState({
            ...formState,
            title: event.target.value
        })
    }

    function onDescChange(event) {
        setFormState({
            ...formState,
            desc: event.target.value
        })
    }

    function onDateChange(event) {
        setFormState({
            ...formState,
            date: new Date(event.target.value)
        })
    }

    function onFinishedChange(event) {
        setFormState({
            ...formState,
            finished: event.target.checked
        })
    }

    return <form onSubmit={onFormSubmit}>
        <input onChange={onTitleChange} value={formState.title} type={'text'} placeholder={"Title"}/>
        <input onChange={onDescChange} value={formState.desc} type={'text'} placeholder={"Description"}/>
        <input onChange={onDateChange} value={formState.date.toISOString().substring(0,10)} type={'date'} placeholder={"Date"}/>
        <label>
            Finished:
            <input onChange={onFinishedChange} value={formState.finished} type={'checkbox'}/>
        </label>

        <button>Submit</button>
    </form>
}