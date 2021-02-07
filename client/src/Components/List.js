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




    return ([<h1> RESULTS</h1>,
        <div className=" " style={Styles.cardItemStyle}>
            <ul className="list-group" style={Styles.cardItemStyle}>
               
               {/* {checkForBooks()} */}
               {/* {props.books.length != 0 ? props.books.map( book => {return(<CardItem {...book}/>) }) :  console.log("nada")}         */}
               {!props.books ? console.log('props.books does not exist') : props.books.map( book => {return(<CardItem {...book}/>) })}


            </ul>
        </div>
    ])
}


export default List;