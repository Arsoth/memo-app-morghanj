import {useState} from "react";
import {MemoForm} from "../memo-form/MemoForm";

export function MemoEdit({memoContents, setMemo, memoList, setMemoList}) {

    const [formState, setFormState] = useState(memoContents);

    function onFormSubmit(event) {
        event.preventDefault()
        let temp = memoList
        let memoPos = memoList.indexOf(memoContents)
        temp[memoPos] = formState
        setMemoList([...temp])
        setMemo(null)
    }
    return <div>
        <h2>Edit Memo:</h2>
        <MemoForm setFormState={setFormState} onFormSubmit={onFormSubmit} formState={memoContents}/>
    </div>
}