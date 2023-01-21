import React, { useEffect, useState } from 'react' 
 // import { useRef, useEffect } from "react"; 
 import './blog.css' 
 import { db } from './firebase-config.js' 
 import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore' 
  
 export default function Blogs() { 
   const [blogs, setBlogs] = useState([]); 
   const [newTitle, setNewTitle] = useState(''); 
   const [newSummary, setNewSummary] = useState(''); 
   const [newContent, setNewContent] = useState(''); 
   const [editingBlog, setEditingBlog] = useState(null); 
  
   useEffect(() => { 
     const unsubscribe = onSnapshot(query(collection(db, 'blogs')), snapshot => { 
       const blogs = snapshot.docs.map(doc => ({ 
         id: doc.id, 
         ...doc.data() 
       })); 
       setBlogs(blogs); 
     }); 
     return () => unsubscribe(); 
   }, []); 
  
   const createBlog = async () => { 
     await addDoc(collection(db, 'blogs'), { 
         Title: newTitle, 
         Summary: newSummary, 
         Content: newContent 
     }); 
     setNewTitle(''); 
     setNewSummary(''); 
     setNewContent(''); 
   }; 
  
   const updateBlog = async (id, Title, Summary, Content) => { 
     await updateDoc(doc(db, 'blogs', id), { 
         Title, 
         Summary, 
         Content 
     }); 
     setEditingBlog(null); 
   }; 
  
   const deleteBlog = async (id) => { 
     const blogRef = doc(db, 'blogs', id); 
     await deleteDoc(blogRef); 
   }; 
    
  
   return ( 
     <div className="blogs-page"> 
       <header> 
         <h1>Blogs</h1> 
       </header> 
       <main> 
         {editingBlog ? ( 
           <> 
             <form> 
               <label> 
                 Title: 
                 <input 
                   type="text" 
                   value={newTitle} 
                   onChange={e => setNewTitle(e.target.value)} 
                 /> 
               </label> 
               <label> 
                 Summary: 
                 <input 
                   type="text" 
                   value={newSummary} 
                   onChange={e => setNewSummary(e.target.value)} 
                 /> 
               </label> 
               <label> 
                 Content: 
                 <textarea 
                   value={newContent} 
                   onChange={e => setNewContent(e.target.value)} 
                 /> 
               </label> 
               <button onClick={() => updateBlog(editingBlog.id, newTitle, newSummary, newContent)}> 
                 Save 
               </button> 
               <button onClick={() => setEditingBlog(null)}>Cancel</button> 
             </form> 
           </> 
         ) : ( 
           <> 
             <form> 
               <label> 
                 Title: 
                 <input 
                   type="text" 
                   value={newTitle} 
                   onChange={e => setNewTitle(e.target.value)} 
                 /> 
               </label> 
               <label> 
                 Summary: 
                 <input 
                   type="text" 
                   value={newSummary} 
                   onChange={e => setNewSummary(e.target.value)} 
                 /> 
               </label> 
               <label> 
                 Content: 
                 <textarea 
                   value={newContent} 
                   onChange={e => setNewContent(e.target.value)} 
                 /> 
               </label> 
               <button onClick={createBlog}>Add Blog</button> 
             </form> 
           </> 
         )} 
         <div className="blogs-container"> 
           {blogs.map(blog => ( 
             <div key={blog.id} className="blog-post"> 
               <h2>{blog.Title}</h2> 
               <p>{blog.Summary}</p> 
               <div className="blog-post-actions"> 
                 <button onClick={() => setEditingBlog(blog)}>Edit</button> 
                 <button onClick={() => deleteBlog(blog.id)}>Delete</button> 
               </div> 
             </div> 
           ))} 
         </div> 
       </main> 
     </div> 
   ); 
    
 }
