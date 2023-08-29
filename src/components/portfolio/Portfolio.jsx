//Import functions from "react"
import { useState, useEffect } from "react"
//Import child component
import PortfolioList from "../portfolioList/PortfolioList"
//Import scss file
import "./portfolio.scss"
//Import data from js file
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data"

export default function Portfolio() {
//  Usage: when you want to change the value of the variable or array
//  Declare varialble or array with format: 
//  const [<name>, set<Name>] = useState(<default_value></default_value>
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        { id: "featured", title: "Featured" },
        { id: "web", title: "Web app" },
        { id: "mobile", title: "Mobile app" },
        { id: "design", title: "Design" },
        { id: "content", title: "Content" },
    ]
//  Usage: useEffect is a function which will run after the first render and everytime it updated. Use this when you want to fetch dynamic data
    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;

            case "web":
                setData(webPortfolio);
                break;

            case "mobile":
                setData(mobilePortfolio);
                break;

            case "design":
                setData(designPortfolio);
                break;

            case "content":
                setData(contentPortfolio);
                break;

            default:
                setData(featuredPortfolio);
        }

    }, [selected]) // Only re-run the effect if selected changes

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} alt={d.title} />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
