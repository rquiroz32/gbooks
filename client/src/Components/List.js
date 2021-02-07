import CardItem from "./CardItem"

function List(props) {

    const Styles ={
        cardItemStyle:{
            width: "100%"
        }
    }

    // const checkForBooks = ()=>{
    //     if (props.books){
    //         for (let i=0; i<props.books.length;i++){
              

    //             return(<CardItem {...props.books[i]}/>)
    //         }            
    //     }else{
    //         console.log("props.books does not exist")
    //     }
    // }




    return ([<h1> RESULTS</h1>,
        <div className=" " style={Styles.cardItemStyle}>
            <ul className="list-group" style={Styles.cardItemStyle}>
               
               {checkForBooks()}
               {/* {props.books.length != 0 ? props.books.map( book => {return(<CardItem {...book}/>) }) :  console.log("nada")}         */}


            </ul>
        </div>
    ])
}


export default List;