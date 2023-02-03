import React,{useEffect,useState} from 'react'
//import{useRef,useEffect}from"react";
import './blog.css'
import {db} from './firebase-config.js'
import {collection,addDoc,updateDoc,deleteDoc,doc,onSnapshot,query} from 'firebase/firestore'
export default function Blogs(){
const[blogs,setBlogs]=useState([]);
const[newTitle,setNewTitle]=useState('');
const[newSummary,setNewSummary]=useState('');
const[newContent,setNewContent]=useState('');
const[editingBlog,setEditingBlog]=useState(null);
useEffect(()=>{
const unsubscribe = onSnapshot(query(collection(db,'blogs')),snapshot=>{
const blogs = snapshot.docs.map(doc=>({
id:doc.id,
...doc.data()
}));
setBlogs(blogs);
});
return () => unsubscribe();
},[]);

//click to call the pop up form on the first page
function addblog(e) {
  const popup_box = document.querySelector('.pop-up_box');
  popup_box.classList.add('show');
}
//remove pop up form
function removeblog() {
  const popup_box = document.querySelector('.pop-up_box');
  popup_box.classList.remove('show');
}

const createBlog = async() => {
await addDoc(collection(db,'blogs'),{
Title:newTitle,
Summary:newSummary,
Content:newContent
});
setNewTitle('');
setNewSummary('');
setNewContent('');
removeblog();
};

const updateBlog = async(id,Title,Summary,Content)=>{
await updateDoc(doc(db,'blogs',id),{
Title,
Summary,
Content
});
setEditingBlog(null);
removeblog();
};
const deleteBlog =async(id)=>{
const blogRef=doc(db,'blogs',id);
await deleteDoc(blogRef);
};
// const editbtnBlog = document.querySelector('.edit');
// editbtnBlog.addEventListener('click', () => {
//   addblog();
// });
// setEditingBlog(){
//   const editbtnBlog = document.querySelector('.edit');
// editbtnBlog.addEventListener('click', () => {
//   addblog();
// });
// }
  // document.querySelector('.edit').addEventListener('click', addblog());

return(
<div className="blogs-page">
<header>
<h1>Blogs</h1>
</header>
<div className='categories-container'>
<div className='categories'>
          <div className='cat Hospitality'>
            <h6>  Hospitality</h6>
          </div>
          <div className='cat Security'>
            <h6>  Security</h6>
          </div>
          <div className='cat Protocol'>
            <h6>  Protocol</h6>
          </div>
          <div className='cat Sanctuary'>
            <h6>  Sanctuary</h6>
          </div>
          <div className='cat Media'>
            <h6> Media </h6>
          </div>
          <div className='cat Choir'>
            <h6>  Choir </h6>
          </div>
          <div className='cat Evangelism'>
            <h6>  Evangelism </h6>
          </div>
          <div className='cat Usher'>
            <h6>  Ushering </h6>
          </div>
          <div className='cat All'>
            <h6>  All </h6>
          </div>
        </div>

  <button className='add' onClick={addblog}>Add Blog</button>
</div>
<main>
{editingBlog ? (
<>
      <div className='pop-up_box'>
        <div className='pop-up'>
          <div className='content'>
          <header>
              <p> Edit Your Blog</p>
              <i className='fas fa-times' onClick={removeblog}></i>
            </header>
<form className='form-blog-container'>
<input
type="text"
placeholder='Title'
value={newTitle}
onChange={e=>setNewTitle(e.target.value)}
/>
<input
type="text"
placeholder='Summary'
value={newSummary}
onChange={e=>setNewSummary(e.target.value)}
/>
<textarea
placeholder='Content'
value={newContent}
onChange={e=>setNewContent(e.target.value)}
/>
<label for="background_img"> Choose an image as your background:  </label>
              <input type="file" name="background_img" id="1" accept=".png, .jpg, .jpeg" required />
              <br />
<button onClick={()=>updateBlog(editingBlog.id,newTitle,newSummary,newContent)} className='add_blog'
> Edit Blog
</button>
<button onClick={()=>setEditingBlog(null)} className='cancelBtn'> Cancel</button>
</form>
</div>
</div>
</div>
</>
) : (
<>
<div className='pop-up_box'>
        <div className='pop-up'>
          <div className='content'>
          <header>
              <p> Add a New Blog</p>
              <i className='fas fa-times' onClick={removeblog}></i>
            </header>
<form className='form-blog-container'>
<input
type="text"
placeholder='Title'
value={newTitle}
onChange={e=>setNewTitle(e.target.value)}
/>
<input
type="text"
placeholder='Summary'
value={newSummary}
onChange={e=>setNewSummary(e.target.value)}
/>
<textarea
placeholder='Content'
value={newContent}
onChange={e=>setNewContent(e.target.value)}
/>
<br />
              <label for="background_img"> Choose an image as your background:  </label>
              <input type="file" name="background_img" id="1" accept=".png, .jpg, .jpeg" required />
              <br />
              <label for='church_cartegories'> Choose your category: </label>
              <select name="church_cartegories" id="church_cartegories">
                <option value="Hospitality"> Hospitality </option>
                <option value="Security"> Security </option>
                <option value="Protocol"> Protocol </option>
                <option value="Sanctuary"> Sanctuary </option>
                <option value="Media"> Media </option>
                <option value="Choir"> Choir </option>
                <option value="Evangelism"> Evangelism </option>
                <option value="Ushering"> Ushering </option>
              </select>

<button onClick={createBlog} className='add_blog'>AddBlog</button>
</form>
</div>
</div>
</div>
</>
)}
<div className="blogs-container">
{blogs.map (blog => (
<div key={blog.id} className="blog-post">
<h1>{blog.Title}</h1>
<p>{blog.Summary}</p>
<div className="blog-post-actions">
<button onClick={()=>setEditingBlog(blog)} className='edit' onMouseOver={addblog}> 
<i className='fa-solid fa-pen-to-square edit'> <span> Edit </span> </i> </button>
<button onClick={()=>deleteBlog(blog.id)}> 
<i className='fa-solid fa-trash delete'> <span> Delete </span> </i></button>
</div>
<button className='btn-blog'> Read more</button>
</div>
))}
</div>
</main>
</div>
);
}
