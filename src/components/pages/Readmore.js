import React,{useEffect,useState} from 'react'
import {db} from './firebase-config.js'
import {collection,onSnapshot,query} from 'firebase/firestore'

function Readmore () {
    const[blogs,setBlogs]=useState([]);

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

  return (
    <>
      <h1 className='bloggy'> Welcome </h1>
      
      {blogs.map (blog => (
        <div>
      <h1>{blog.Title}</h1>
      <p>{blog.Summary}</p>
      <p>{blog.Content}</p>
      </div>
        ))}
    </>
  )
};

export default Readmore
