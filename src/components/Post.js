import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { getRequest } from '../request/instance';

function Post() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        getRequest('posts').then((res) => setPost(res.data));
    }, []);

    return (
        <Accordion>
            {posts?.map((item, index) => (
                <Accordion.Item key={item?.id} eventKey={index}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default Post;
