/** Over30Mins: function to display read-time information for articles with more than 30mins read time.
 * 
 * @minutes: props passed from Article Component
 * @image : time icon to display
 * @displayTime: counter to keep track how many times to repeat image.
 * Method: Math.ceil : roundup the displayTime.
 */
function Over30Mins({minutes}){

    let image="🍱"
    const displayTime = Math.ceil(minutes/10)
    image = image.repeat(displayTime)
    return (
            <span>{image} {minutes} min read</span>
        )
}

export default Over30Mins