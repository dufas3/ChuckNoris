import {Card,Button} from "react-bootstrap";
import './joke.sass'
let favoriteList=[];
const Joke =(props)=>{

    const handleSave = ()=>{
        let obj ={}
        obj["id"] = props.id;
        obj["value"] = props.value;
        obj["url"] = props.url;
        favoriteList.push(obj)
        localStorage.setItem('favoriteJokes',JSON.stringify(favoriteList))
    }
    return(
        <Card className="col-sm-5 m-5">
            <Card.Header><h5>{props.value}</h5></Card.Header>
            <Card.Body>
                <div className="m-2"><a href={props.url} target="_blank">Saltinis</a></div>
                <div><Button onClick={handleSave}>Man patinka</Button></div>
            </Card.Body>
        </Card>
    )
}

export default Joke