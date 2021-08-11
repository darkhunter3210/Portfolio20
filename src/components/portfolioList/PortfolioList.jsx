import "./portfolioList.scss"

export default function PortfolioList({id,title,active,setSelected}) {
    return (
        <li className={active ? "portfolioList active" : "protfolioList"} onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}
