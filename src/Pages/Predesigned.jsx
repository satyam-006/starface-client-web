import Design from "../assets/Api/Api"
export const Predesigned = () => {

    return (
        <>
        <main>
            <section className="first">
                <h2>redisigned</h2>
                <h1>redesigned head</h1>
                <span> <hr width={'40%'} style={{ border: '2px solid red', margin: "0 auto" }} /> </span>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora sequi natus recusandae modi! Et nostrum quas unde tempora sunt in voluptatibus eveniet, alias deserunt ipsum molestias fuga ducimus quae dolorem vero voluptatum asperiores veritatis suscipit assumenda voluptates veniam! Possimus tempora facere quam quibusdam debitis exercitationem fugiat itaque minima velit.</p>
                <div>
                    <img src="" alt="1" />
                    <img src="" alt="2" />
                    <img src="" alt="3" />
                    <img src="" alt="4" />
                    <img src="" alt="5" />
                </div>
            </section>
            <section className="second">
                <div>
                    <img src="" alt="2-1" />
                    <img src="" alt="2-2" />
                    <img src="" alt="2-3" />
                    <img src="" alt="2-4" />
                    <img src="" alt="2-5" />
                </div>
                
                <div>
                    {Design.map((curElem,index)=>{
                        const {id,topic,heading,discription,btn} = curElem;
                        return(
                            <>
                            <div key={index}> 
                                <h2>start yours {topic}</h2>
                                <h1>online store {heading} </h1>
                                <span> <hr width={'40%'} style={{ border: '2px solid red', margin: "0 auto" }} /> </span>
                                <p>
                                    {discription}
                                </p>
                                <h3>{btn}</h3>
                            </div>
                            </>
                        )
                    })

                    }
                </div>
                <div>
                    <img src="" alt="2-1" />
                    <img src="" alt="2-2" />
                    <img src="" alt="2-3" />
                    <img src="" alt="2-4" />
                    <img src="" alt="2-5" />
                </div>
                <div>
                                <h2>start yours</h2>
                                <h1>online store</h1>
                                <span> <hr width={'40%'} style={{ border: '2px solid red', margin: "0 auto" }} /> </span>
                                <p>
                                    
                                </p>
                                <button></button>
                            </div>


            </section>
        </main>
        </>
    )
     
}