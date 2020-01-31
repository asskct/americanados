import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
    const [state, setState] = useState({})
    const [error, setError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
     
   
    useEffect(() => {       
        if(Object.keys(error).length === 0 && isSubmitting) {
            callback(state)           
        }
    }, [error])

    const handleChange = e => {
        e.persist()
        setState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        setError(validate(state))
        setIsSubmitting(true)
    }

    return [state, handleChange, handleSubmit, error]
}

export default useForm