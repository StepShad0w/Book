import{v4 as uuidv4} from'uuid'

const  createBooksWithId=(book,source)=> {
  return {
   ...book,
   source,
   isFavorite:false,
   id:uuidv4()
  }
}
export default createBooksWithId
