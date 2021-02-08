import { Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

 
function App() {

  let deneme = {info : "titleVeri", count : "5"}
  var asd = function() {
    console.log("fonksiyon çalıştı");
    return "deneme"
  };
  var deneme2 = {...deneme,asd};
  return (
    <div>
      <Container>
        <Row>
        <Navi></Navi>
        </Row>
        <Row>
        <CategoryList title={deneme2}/>
        </Row>
        <Row>
        <ProductList title='2'/>
        </Row>
      </Container>
      <h3> Hello from react</h3> 
  
    
    </div>
    
  );
}

export default App;
