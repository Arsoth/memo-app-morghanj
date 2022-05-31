import {useState} from "react";
import {MemoForm} from "../memo-form/MemoForm";

export function MemoInput({onSubmit}) {

    const [formState, setFormState] = useState({
        title: '',
        desc: '',
        date: new Date(),
        finished: false
    });

    function onFormSubmit(event) {
        event.preventDefault()
        onSubmit({...formState})
    }
    return <MemoForm setFormState={setFormState} onFormSubmit={onFormSubmit} formState={formState}/>
}