
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function Api() {

    let api=()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/latest")
        .then(res=>{
            alert("Api called..");
            console.log(res.data);
        })
    }
  return (
    <>
    <h1>This is Api Page</h1>
    <Button variant="success" onClick={api}>Api</Button>

    </>
  )
}