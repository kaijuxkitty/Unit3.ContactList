export default function ContactRow ({contact}) {
   console.log(contact)
    return <tr> 
        <td> {contact.name}</td>
        <td>{contact.email} </td>
        <td>{contact.phone} </td>
    </tr>
}