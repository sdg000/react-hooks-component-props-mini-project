/**
 * 
 * @About Component
 * @params: image: props passed from App component (with default value).
 * @params: about: props passed from App component
 */
function About({
    image="https://via.placeholder.com/215", 
    about})
    {
    
    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About