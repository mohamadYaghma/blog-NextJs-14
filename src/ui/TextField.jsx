
export default function TextField({
    type= "text",
    lable,
    name,
    value,
    dir="rtl",
    onChange,
    isRequired,
    className,
}) {
    return (
        <div className="textField">
            <label htmlFor={name} className="text-secondary-600 text-sm">
                {lable}
            </label>
            <input 
                type={type} 
                name={name}
                id={name}
                dir={dir}
                className={`textField__input ${
                    dir === "ltr" ? "text-left" : "text-right" 
                } ${className}`}
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}
