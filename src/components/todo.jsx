export function Todo({title, type, disable}) {
    return (
        <div className="todo">
            <p>{title}</p>
            <select>
                <option value={type}>{type}</option>
                <option value={disable}>{disable}</option>
            </select>
        </div>
    )
}