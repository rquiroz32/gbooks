import CardItem from "./CardItem"

function List(props) {

    const Styles ={
        cardItemStyle:{
            width: "100%"
        }
    }

    // const checkForBooks = ()=>{
    //     let jsx
    //     if (props.books){
    //         for (let i=0; i<props.books.length;i++){
             

    //        jsx += <CardItem {...props.books[i]}/>
    //         }            
    //     }else{
    //         console.log("props.books does not exist")
            
    //          jsx = '<div></div>'
    //     }
    //      console.log(JSON.stringify(jsx))
    // }




    return ([<h1 key={"SearchResultsHeader"} > RESULTS</h1>,
        <div key={"SearchResultsContainer"} style={Styles.cardItemStyle}>
            <ul key={"SearchResultsList"} className="list-group" style={Styles.cardItemStyle}>               
               {!props.books ? console.log('props.books does not exist') : props.books.map( book => {return(<CardItem key={book.id} {...book}/>) })}


            </ul>
        </div>
    ])
}


export default List;