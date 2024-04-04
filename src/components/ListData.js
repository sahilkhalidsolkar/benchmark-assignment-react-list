import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Loading from './Loading'

const ListData = ({ data }) => {
    return (
        <ListGroup as='ol' numbered className='my-4 '>
            {data.length <= 0 && <Loading />}
            {data?.map((item) => {
                return <ListGroup.Item
                    as="li"
                    key={item.id}
                    className=''
                >{item.title}</ListGroup.Item>
            })}

        </ListGroup>
    )
}

export default ListData