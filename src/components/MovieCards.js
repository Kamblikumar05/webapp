const MovieCards = (props) => {
    const {cards,title, release_date} = props;

    return ( 
        <div className="p-2 cursor-auto"> 
            <img className="  min-w-[150px] h-[225px] rounded-md  scroll-me-40 " src= {"https://image.tmdb.org/t/p/w300//" + cards?.poster_path} alt="poster"/>
            <div className="p-2">  
                <div className="font-semibold py-1 ">{title}</div> 
                <div className="font-light">{release_date}</div>
            </div>
        </div>
        ) ;
};
export default MovieCards;