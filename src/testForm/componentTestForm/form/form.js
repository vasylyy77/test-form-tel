import React from 'react'
import s from './form.module.scss'
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux'
import { fetchUserAdd } from '../../../store/slise/sliseData'


const Form = () => {
    const dispatch = useDispatch()
    const [state, setState] = React.useState()
    const [countTel, setCountTel] = React.useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => dispatch(fetchUserAdd(data));


    const addTel = () => {
        setState(countTel.push(1))
    }


    const deleteTel = () => {
        setState(countTel.pop(1))
    }


    return (
        <div className={s.wrapper}>

            <div >
                <form className={s.form} autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="">
                        <p>name</p>
                        <input  {...register("name", { required: true })} />
                        {errors.name && <span className={s.span}> Required</span>}
                    </label>


                    <label htmlFor="">
                        <p>lastName</p>
                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && <span className={s.span}> Required</span>}
                    </label>
                    <label >
                        <p>tel</p>
                        <InputMask mask="+999 999 999 99 99" {...register(`tel`)} />

                    </label>

                    {
                        countTel.map((i, index) => {
                            return <label key={index} htmlFor="">
                                <p>tel</p>
                                <InputMask mask="+999 999 999 99 99" {...register(`tel${index}`)} />

                            </label>
                        })
                    }

                    <div className={s.boxBtn}>
                        <div className={s.btn} onClick={addTel}>add</div>
                        <div className={s.btn} onClick={deleteTel}>delete</div>
                    </div>

                    <input type="submit" />
                </form>
            </div>

        </div>
    )
}
export default Form
