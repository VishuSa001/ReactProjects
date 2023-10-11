import './Video.css'
function Video({title,channel ="Vishal",view, time,verified}){
   

    return (
        <div className='container'>
            <div className='pic'>
            <img src="https://placekitten.com/260/180" alt="cats" />
            </div>

            <div className='title'>{title} Just For Practice</div>
            {/* condition rendering to javascript using ternary operator ( var  ? jsx : jsx) */}
            {verified ?  <div className='channel'>{channel}✅ </div>
           : <div className='channel'>{channel}</div> }


            <div className="views">
                {view} views <span>.</span> {time}
            </div>
        </div>
    )

    }


export  default Video;