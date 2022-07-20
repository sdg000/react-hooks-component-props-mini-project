import Over30Mins from "./Over30Mins"
import Under30Mins from "./Under30Mins"

// Article component (child of ArticleList Component) to be used to display items in ArticleList Component
function Article({
    title, 
    date="January 1, 1970", 
    preview,
    minutes})
    
    {

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} .  {minutes < 30 ? <Under30Mins minutes={minutes}/>  : <Over30Mins minutes={minutes}/>}
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article