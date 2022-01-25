
const Random = ({ min, max }) => {

    const r = min + Math.floor(Math.random() * (max - min))
    
    return (
        <div>
            Expected output between {min} and {max} => {r}
        </div>
    )
}

export default Random