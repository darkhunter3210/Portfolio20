import "./testimonials.scss"


export default function Testimonials()
{
    const data = [
        {
          id: 1,
          name: "All Might",
          title: "Symbol of Peace",
          img:
            "https://www.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg",
          icon: "asset/symbol.jpeg",
          desc:
            "I would give Matthew one for all if I didn't meet Midoriya-Kun first. Matthew is a very smart and logical person.",
        },
        {
          id: 2,
          name: "Erwin Smith",
          title: "Commander of Survey Corps",
          img:
            "https://yakovmerkin.files.wordpress.com/2021/02/erwin-smith-2.jpg?w=1080",
          icon: "asset/survey_corps.png",
          desc:
            "Matthew is a great person and a great worker, he always give his work his all. SASAGEYO!!!!!!",
          featured: true,
        },
        {
          id: 3,
          name: "Naruto Uzumaki",
          title: "Hokage of the Hidden Leaf Village",
          img:
            "asset/naruto.png",
          icon: "asset/leaf.jpg",
          desc:
            "Matthew should be the next hokage because he is just that good.",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className= {d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="asset/right-arrow.png" className ="left" alt=""/>
                        <img className="user" src={d.img} alt=""/>
                        <img className="right" src={d.icon} alt=""/>
                    </div>
                    <div className="center"> {d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div> ))}
            </div>
            
        </div>
    )
}