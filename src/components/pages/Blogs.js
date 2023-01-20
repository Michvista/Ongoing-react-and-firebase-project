import React, { useEffect, useState } from 'react'
// import { useRef, useEffect } from "react";
import './blog.css'
import { db } from './firebase-config.js'
import { collection, addDoc, updateDoc, doc, onSnapshot, query } from 'firebase/firestore'

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [newTitle, setTitle] = useState('');
  const [newSummary, setSummary] = useState('');
  const [newContent, setContent] = useState('');
  // const [update, setUpdate] = useState('');
  // const [updateTitle, setUpdateTitle] = useState('');

  const blogscollection = collection(db, 'blogs');

  const addbtn = document.querySelector('.add_blog');
  const header = document.querySelector('header p');

  useEffect(() => {
    snappy()
  }, []) 

const snappy = 
onSnapshot(query(collection(db, 'blogs')),
snap => {
  const updateUsers =[]
  snap.forEach(doc => {
    updateUsers.push({...doc.data(), id: doc.id})
  })
  setBlogs(updateUsers);
})

  function addblog(e) {
    removeblog();
    const popup_box = document.querySelector('.pop-up_box');
    // const editbtn = document.querySelector('.edit_blog');
    // const addbtn = document.querySelector('.add_blog');
    // editbtn.classList.add('add');
    // addbtn.classList.remove('edit');
    popup_box.classList.add('show');
    addbtn.innerText = 'Add Blog';
    header.innerText = 'Add a New Blog';
  }
  function removeblog() {
    const popup_box = document.querySelector('.pop-up_box');
    // const closebtn = document.querySelector('header i')
    popup_box.classList.remove('show');
  }
  const addbtnblogs = async (e) => {
    await addDoc(blogscollection, { Title: newTitle, Summary: newSummary, Content: newContent });
    e.preventDefault();
    removeblog();
  }

  function edit  (id, Title, Summary, Content) {
    addblog();
    const inputTitle = document.querySelector('input');
    const inputSummary = document.querySelector('#summary');
    const content = document.querySelector('textarea');
    // const addbtn = document.querySelector('.add_blog');
    // const editbtn = document.querySelector('.edit_blog');
      // addbtn.classList.add('edit');

      header.innerText = 'Edit your Blog';
      // title = newTitle();
    // const update = { Title: inputTitle.value };
    // const des ={...update}
   inputTitle.value = Title;
   inputSummary.value = Summary;
   content.value = Content;

  //  console.log(id)
    }

    const editbtn = async (id, Title) => {
      removeblog();
      const inputTitle = document.querySelector('input');
      const inputSummary = document.querySelector('#summary');
      const content = document.querySelector('textarea');
      // const 88
      const blogsers = doc(db, 'blogs', id)
      const updated = {Title: inputTitle.value}
      await updateDoc(blogsers, updated)
    console.log(id);
    };
 
  const day = new Date();
  const month = [
    'January', 'Febuary', 'March', ' April',
    'May', ' June', 'July', 'August', 'September', 'October',
    'November', 'December'
  ]
  const date = [
    {
      Month: month[day.getMonth()],
      Day: day.getDay(),
      Year: day.getFullYear()
    }
  ]
  function showmenu(e) {
    const parent = document.querySelector('.settings');
    // this.e = parent;
    parent.classList.add('show');
    const edit = parent.querySelector(' ul .edit');
    const second = parent.querySelector(' ul .delete');
    edit.addEventListener('click', () => {
      parent.classList.remove('show');
    });
    second.addEventListener('click', () => {
      parent.classList.remove('show');
    })
  }
  return (
    <>
      {/* Adding blogs pop-up form */}
      <div className='pop-up_box'>
        <div className='pop-up'>
          <div className='content'>
            <header>
              <p> Add a New Blog</p>
              <i className='fas fa-times' onClick={removeblog}></i>
            </header>
            <div className='form-blog-container'>
              <input type="text" name="title" placeholder='Your Title' required onChange={(e) => {
                setTitle( e.target.value)
              }} />
              <input id='summary' type="text" name="summary" placeholder='Summary' required maxLength={100}
                onChange={(e) => {
                  setSummary(e.target.value)
                }} />
              <textarea name="text" placeholder='Content goes here' required
                onChange={(e) => {
                  setContent(e.target.value)
                }}></textarea>
              <br />
              <label for="background_img"> Choose an image as your background:  </label>
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
              <button className='add_blog' onClick={addbtnblogs}> Add Blog </button>
         
              {blogs.map((blog) => {
            return ( 
              <button className='edit_blog' onClick={()=>  {editbtn(blogs.id, blogs.Title)}}
              > Edit Blog </button> 
             );
             })} 
            </div>
          </div>
        </div>
      </div>
      <div className='blogs-container'>
        <h1 className='blog-title'> Blogs</h1>
        <h3 className='blog-subtitle'> Categories</h3>
        <div className='categories'>
          <div className='cat Hospitality'>
            <h6>  Hospitality</h6>
          </div>
          <div className='cat Security'>
            <h6>  Security</h6>
          </div>
          <div className='cat Protocol'>
            <h6>  Protocol</h6>
          </div>
          <div className='cat Sanctuary'>
            <h6>  Sanctuary</h6>
          </div>
          <div className='cat Media'>
            <h6> Media </h6>
          </div>
          <div className='cat Choir'>
            <h6>  Choir </h6>
          </div>
          <div className='cat Evangelism'>
            <h6>  Evangelism </h6>
          </div>
          <div className='cat Usher'>
            <h6>  Ushering </h6>
          </div>
          <div className='cat All'>
            <h6>  All </h6>
          </div>
        </div>
        <button className='btn' onClick={addblog} >
          +  Add blog
        </button>
        <div className='blogs'>
          {blogs.map((blog) => {
            return (
              <div className='blog'>
                  {/* <i onClick={showmenu} className='fa-solid fa-ellipsis' id='set'></i>
                  <ul>
                  </ul> */}
                <div className='set'>
                    <li onClick={ () => edit(blog.id, blog.Title,blog.Summary, blog.Content)} className='pen'> <i className='fa-solid fa-pen-to-square edit'> <span> Edit </span> </i> </li>
                    <li> <i className='fa-solid fa-trash delete'> <span> Delete </span> </i> </li>
                </div>
                <h1> {blog.Title} </h1>
                <p id='summary'>{blog.Summary}</p>
                <div className='bottom'>
                  {date.map((par) => (
                    <h6> {par.Day + ' ' + par.Month + ' ' + par.Year} </h6>
                  ))}
                  <button className='btn-blog'> Read more</button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}
