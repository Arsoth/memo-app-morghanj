import {useState} from "react";
import {MemoForm} from "../memo-form/MemoForm";

export function MemoInput({onSubmit}) {

    const defaultForm = {
        title: '',
        desc: '',
        date: new Date(),
        finished: false
    }
    const [formState, setFormState] = useState(defaultForm);

    function onFormSubmit(event) {
        event.preventDefault()
        onSubmit({...formState})
        setFormState(defaultForm)
    }
    return <MemoForm setFormState={setFormState} onFormSubmit={onFormSubmit} formState={formState}/>
}