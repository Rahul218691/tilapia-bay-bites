const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
      <img 
        src="/Preloader.gif" 
        alt="Loading..." 
        className="w-24 h-auto sm:w-28 md:w-32"
        loading="lazy"
      />
    </div>
  )
}

export default Loading