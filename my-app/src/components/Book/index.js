import BookAuthor from '../BookAuthorName'
import BookImage from '../BookImage'
import BookName from "../BookName"
import BookPrice from "../BookPrice"

function Book() {
    return <>
    <div className="book">
        <BookImage/>
        <BookName/>
        <BookPrice/>
        <BookAuthor/>
    </div>
    </>

}
export default Book
