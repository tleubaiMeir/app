import React from 'react';
import '../styles/PostsComponent.css'
import MyButton from './UI/MyButton';
const PostsComponent = ({ array, onClick }) => {
    return (
        <div className='posts'>
            {array.map(arr => {
                return (
                    <div className='post' key={arr.id}>
                        <div>
                            <p className='post__date'> <strong>Дата публикации:</strong> {arr.date}</p>
                            <p> <strong>Заголовок:</strong> {arr.title}</p>
                            <p> <strong>Описание:</strong> {arr.body}</p>
                        </div>
                        <div>
                            <MyButton onClick={() => onClick(arr)} className={'post__button'} text={'Удалить'} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default PostsComponent;