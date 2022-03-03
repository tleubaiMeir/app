import React from 'react';
import '../styles/PostsComponent.css'

const PreviewComponent = ({ options }) => {

    const { title, body, date, posts } = options

    function block() {
        return <div className='post' style={{background: 'darkorange'}}>
            <div>
                <h2 className='title'>Предпросмотр</h2>
                <p className='post__date'> <strong>Дата публикации:</strong> {date}</p>
                <p> <strong>Заголовок:</strong> {title}</p>
                <p> <strong>Описание:</strong> {body}</p>
            </div>
        </div>
        
    }

    const beforeText = (styles) => <h2 style={styles}> Добавь свой первый пост </h2>
    const afterText = () => <h2> Количество постов: {posts.length} </h2>
    const resultText = () => posts.length ?  afterText() : beforeText({textAlign: 'right'})
    const preview = () => options.show ? block() :  resultText() //Функция для отображения

    
    
    return (
        <div className="posts">
            {
                preview()
            }
        </div>
    );
};

export default PreviewComponent;