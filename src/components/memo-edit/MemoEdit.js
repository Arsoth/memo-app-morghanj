import {useState} from "react";
import {MemoForm} from "../memo-form/MemoForm";

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
    return <MemoForm setFormState={setFormState} onFormSubmit={onFormSubmit} formState={formState}/>
}