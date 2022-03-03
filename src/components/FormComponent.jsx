import React from 'react';
import MyButton from './UI/MyButton';
import MyInput from './UI/MyInput';
import '../styles/FormComponent.css'

const FormComponent = ({ options }) => {
    const {title,body,date,addBody,addDate,addTitle,addPost,show, setShow} = options

    return (
        <form className='form'>
            <div className="form__group">
                <label htmlFor="title">
                    <p>Заголовок</p>
                    <div>
                        <MyInput id={'title'} type={'text'} value={title} onChange={addTitle} />
                    </div>
                </label>
                <label htmlFor="body">
                    <p>Описание</p>
                    <div>
                        <MyInput id={'body'} type={'text'} value={body} onChange={addBody} /></div>
                </label>
            </div>
            <label htmlFor="date">
                <p>Дата публикации</p>
                <div>
                    <MyInput id={'date'} type={'date'} value={date} onChange={addDate} />
                </div>
            </label>
            <MyButton className='button' onClick={(e)=>{
                e.preventDefault()
                console.log(title,body,date)
                if(!title || !body || !date){
                    return
                }
                addPost()
            }} text={'Сохранить'} />

            <div className='form__radio'>
                <label htmlFor="radio">
                <p>Предпросмотр: </p>

                <MyInput type={'checkbox'} id={'radio'} value ={show} onChange={() => setShow(prev => prev = !prev)} />
               
                </label>
            </div>
        </form>
    );
};

export default FormComponent;