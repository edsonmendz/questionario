import './container.css'

function Container(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Container