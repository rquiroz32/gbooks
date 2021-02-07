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
    //             let cardItemArray = []
                
    //             cardItemArray.push(<CardItem {...props.books[i]}/>)

    //             return(cardItemArray)
    //         }            
    //     }else{
    //         console.log("props.books does not exist")
    //     }
    // }

    return ([<h1> RESULTS</h1>,
        <div class=" " style={Styles.cardItemStyle}>
            <ul class="list-group" style={Styles.cardItemStyle}>
                {/* {checkForBooks()} */}
                {/* {props.books.length!=0 ? props.books.map((book)=>{<CardItem {...book}/>}): null} */}
                {/* <CardItem book={props.books[0]}/>    */}

                {props.books.length != 0 ? props.books.map( book => {return(<CardItem {...book}/>) }) :  console.log("nada")}

                
            </ul>
        </div>
    ])
}


export default List;