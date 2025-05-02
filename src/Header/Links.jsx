import { Link } from "react-router-dom";

export default function Links({item,link,targetValue}) {
    return <> 
            <li>
                <Link to={link} target={targetValue}>{item}</Link>
            </li>
    </>
}