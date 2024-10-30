import Table from '@/ui/Table'
import toLocalDateShort from '@/utils/dateFormater';
import toPersianDigit from '@/utils/numberFormatter';
import trancateText from '@/utils/trancateText';
import { DeletePost, UpdatePost } from './Buttons';

const typeStyle ={
    free : {
        lable: "رایگان" ,
        className:"badge--success",
    },
    premium : {
        lable: "پولی" ,
        className:"badge--secondary",
    },
}
export default function PostRow({index , post}) {
    const {title , category , author , createdAt , type} = post ;
    return (
        <Table.Row>
            <td>{toPersianDigit(index+1)}</td>
            <td>{trancateText(title , 30)}</td>
            <td>{category.title}</td>
            <td>{author.name}</td>
            <td>{toLocalDateShort(createdAt)}</td>
            <td><span className={`badge ${typeStyle[type].className}`}>{typeStyle[type].lable}</span></td>
            <td>
                <div className="flex items-center gap-x-3">
                    <DeletePost id={post._id}/>
                    <UpdatePost id={post._id}/>
                </div>
            </td>
        </Table.Row>
    )
}
