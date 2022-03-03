import React, { useState } from 'react';
import './index.css'
import FormComponent from './components/FormComponent'
import PostsComponent from './components/PostsComponent';
import PreviewComponent from './components/PreviewComponent';


const App = () => {

    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [date, setDate] = useState('')
    const [show,setShow] = useState(false)

    const options = {
        posts,
        title,
        body,
        date,
        show,
        setShow,
        addTitle: value => setTitle(value),
        addBody: value => setBody(value),
        addDate: value => setDate(value),
        addShow: value => setShow(value),
        addPost: (()=>{
            const newPost = {title,body,date,id:Date.now()}
            setPosts([...posts,newPost])
            setTitle(''); setBody(''); setDate('')
        }),
        removePost: post => setPosts(posts.filter(i => i.id !== post.id))
    }

    

    return (
        <div className='app'>
            <FormComponent
                options={options}
            />

            <PreviewComponent options={options} />

            <PostsComponent
                onClick={options.removePost}
                array={posts} />

        </div>
    );
};

export default App;