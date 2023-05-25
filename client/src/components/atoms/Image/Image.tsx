interface Props {
    alt: string;
    src: string;
    width: string;
    height: string;
}

/**
 * Component for rendering images on the site
 * @param {object} props
 * @param {string} props.alt Indicates the alt text of the image. Required for a11y
 * @param {string} props.src Indicates the source of the image to be rendered
 * @param {string} props.width Indicates the width of the image
 * @param {string} props.height Indicates the height of the image
 * @returns
 */
export default function Image (props: Props) {
    const {alt, src, width, height} = props;

    return (
        <img src={src} alt={alt} width={width} height={height} loading="lazy"/>
    );   
}