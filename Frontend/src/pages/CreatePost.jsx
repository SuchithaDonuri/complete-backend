import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function CreatePost() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    await axios.post("http://localhost:3000/create-post", formData).then((res) => {

        navigate("/feed")
    }).catch((err) => {
        console.log(err)
    })
  }
      
  return (
    <section className='create-post'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="caption" placeholder="Caption enter" />

        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
