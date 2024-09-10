const btnType = {
    primary : 
    "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white" ,
    secondary:
    "bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
    outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200" ,
    red:
    "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white",
    danger:
    "border border-red-100 text-red-500",
}

export default function ButtonIcon({children , variant ,className , onClick , ...rest }) {
    return (
        <button 
            className={`
                ${btnType[variant]}
                ${className}
                flex items-center gap-x-1 justify-center rounded-md p-0.5
                [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inherit
                transition-all duration-300 ease-out 
            `}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}
