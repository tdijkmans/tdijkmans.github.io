import './CaptionedImage.css'

type props = {
    caption?: string
    src?: string
    alt?: string
    ariaLabel?: string
}

const CaptionedImage = ({ caption, src, alt, ariaLabel }: props) => (
    <>
        <img
            className="custom-image"
            src={src}
            alt={alt}
            aria-label={ariaLabel}
        />
        <caption className="custom-image__caption">{caption}</caption>
    </>
)

export default CaptionedImage
