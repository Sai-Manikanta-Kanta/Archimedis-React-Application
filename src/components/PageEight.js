import "../styles/pageEight.css";
import settingIcon from "../assets/setting-icon.png";
import bulbIcon from  "../assets/bubl-icon.png";
import latestIcon from "../assets/latest-icon.png";
import consistentIcon from "../assets/consistent-icon.png";
export default function PageEight()
{
    return(
        <div className="page-eight-wrapper">
        <div id="why-archimedis-heading">Why Archimedis?</div>
        <div id="why-archimedis-text">Our single-minded focus on superior quality <br/> leading to client success.</div>
        <div id="why-archimedis-icons-wrapper">
            <div id="why-unit-one">
            <div id="icon-wrapper-one">
                <img className="unit-icon"   alt="setting-icon" src={settingIcon}    />
            </div>
            <div id="robust-text">Robust <br/> Processes</div>
            </div>
            
            <div id="why-unit-two">
            <div id="icon-wrapper-two"><img className="unit-icon"  alt="bulb-icon" src={bulbIcon}    /></div>
            <div id="capable-text">Capable <br/> People</div>
            </div>
            <div id="why-unit-three">
            <div id="icon-wrapper-three"><img className="unit-icon"  alt="latest-icon" src={latestIcon}    /></div>
            <div id="latest-text">Latest<br/> Technology</div>
            </div>
            <div id="why-unit-four">
            <div id="icon-wrapper-four"><img className="unit-icon"  alt="consistent-icon" src={consistentIcon}    /></div>
            <div id="consistent-text">Consistent <br/> Execution</div>
            </div>
        </div>
        </div>
    )
}