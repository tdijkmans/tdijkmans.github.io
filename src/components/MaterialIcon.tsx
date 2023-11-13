export default function MaterialIcon({
    iconName,
    className,
}: {
    iconName: string
    className?: string
}) {
    return (
        <span className={`material-symbols-outlined ${className}`}>
            {iconName}
        </span>
    )
}
