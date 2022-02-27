import React from 'react'
import List from './componentTestForm/list/list'
import Navig from './componentTestForm/navigate/navigate'
import Form from './componentTestForm/form/form'
import s from './testForm.module.scss'
const TestForm = ()=>{
return (
<div className={s.wrapper}>

<Navig/>
<Form/>
<List/>
</div>
)}
export default TestForm
