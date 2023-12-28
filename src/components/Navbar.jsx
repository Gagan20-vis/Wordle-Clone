import { TiThMenu } from "react-icons/ti";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <div className="menu"><TiThMenu /></div>
            </div>
            <div className="center">Wordle</div>
            <div className="right">
                <div className="knowMore"><FaRegCircleQuestion /></div>
                <div className="stat"><IoStatsChartSharp /></div>
                <div className="setting"><IoMdSettings /></div>
                <div className="btn"><button>Subscribe to Games</button></div>
            </div>
        </div>
    )
}
