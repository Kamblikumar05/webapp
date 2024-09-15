const VideoTitle =({moviesData})=>{
    // console.log(moviesData);
    const {title, release_date,original_title} = moviesData;
    return ( 
        <>
        <div className=" absolute   z-10 text-slate-100 px-20 p-[345px] bg-gradient-to-r from-black ">
            <p className="text-3xl">{original_title}</p>
            <p className="text-3xl">{title}</p>
            <p className="text-3xl" >{release_date}</p> 
            <button className=" text-black   px-3 p-2 w-32 bg-neutral-300 text-lg rounded-sm  my-3 hover:bg-opacity-80  ">▶ Play</button> 
            <button className="    p-2 px-3 text-lg hover:bg-opacity-30 bg-neutral-300 w-32 rounded-sm bg-opacity-50 m-3"> ℹ️ More </button> 
        </div>
        </>
    )

};
export default VideoTitle;