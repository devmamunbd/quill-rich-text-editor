import { useState } from 'react'
import './App.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function App() {
  const [value, setValue] = useState(0)
  const toolbarOptions = [ ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']          ];

  const module = {
    toolbar: toolbarOptions
  }
  return (
    <>
    <h1>React Quill Rich Text Editor</h1>
    <ReactQuill modules={module} value={value} theme='snow' onChange={setValue}/>
    </>
  )
}

export default App
