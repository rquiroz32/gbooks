import SavedBook from "./SavedBooks"

function Results(props) {

    const Styles = {
        cardItemStyle: {
            width: "100%"
        }
    }

    return (
        [<h1 key={"SavedBooksHeader"} > Saved Books</h1>,
        <div key={"SavedBooksContainer"} className=" " style={Styles.cardItemStyle}>
            <ul key={"SavedBooksList"} className="list-group" style={Styles.cardItemStyle}>
                {!props.books ? console.log('props.books does not exist') : props.books.map( book => { return (<SavedBook key={book._id || "test"} {...book} />) })}
            </ul>
        </div>
        ]
    )
}

export default Results