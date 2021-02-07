import SavedBook from "./SavedBooks"

function Results(props){

    const Styles ={
        cardItemStyle:{
            width: "100%"
        }
    }

    return(
        [<h1> Saved Books</h1>,
            <div className=" " style={Styles.cardItemStyle}>
                <ul className="list-group" style={Styles.cardItemStyle}>
                   
                
                   {!props.books ? console.log('props.books does not exist') : props.books.map( book => {return(<SavedBook {...book}/>) })}

    
                </ul>
            </div>
        ]
    )
}

export default Results