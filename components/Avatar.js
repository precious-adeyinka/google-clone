function Avatar ({ url }) {
  return (
    <img className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 hover:bg-gray-100" loading="lazy" src={url} alt="Profile Picture" />
  )
}

export default Avatar;