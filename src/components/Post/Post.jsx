import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post;

    const navigate = useNavigate();


    const PostStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }


    return (
        <div style={PostStyle}>
            <h4>Post id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`} ><button>Show Details</button></Link>
            <button onClick={handleShowDetail}>Click to see Details</button>
        </div>
    );
};

export default Post;