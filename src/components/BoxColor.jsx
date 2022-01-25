

const BoxColor = ({ r, g, b }) => {

    const color = `rgb(${r}, ${g}, ${b})`
    return (
        <div style={{ backgroundColor: color }} width={400} height={200}>
            {color}
        </div>        
    )   

}

export default BoxColor