import ContactsListItem from './ContactsListItem'

const List = ({contacts, filteredData, onClick})=>{
    return (
        <ol className="list">
            <ContactsListItem contacts={contacts} filteredData={filteredData} onClick={onClick}/>
        </ol>
    )
}

export default List;