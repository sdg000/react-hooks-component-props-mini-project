import Article from "./Article"

//ArticleList component with prop passed down from App component
function ArticleList({posts}){
    //console.log(posts)

    //map through "posts" prop and for each article, call Article component to display it
    const showPosts = posts.map((item) => {
        return (
            <Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes}/>
        )
    })

    return (
        <main>
            {showPosts}
        </main>
    )
}

export default ArticleList