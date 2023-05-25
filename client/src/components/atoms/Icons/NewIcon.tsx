// icon:new-box | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
interface Props {
    height?: string;
    width?: string;
}


function NewIcon(props: Props) {
    const {height = "1em", width= "1em"} = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height={height} width={width} aria-hidden={true}
    >
      <path d="M20 4c1.11 0 2 .89 2 2v12c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V6c0-1.11.89-2 2-2h16M8.5 15V9H7.25v3.5L4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2m5-4.74V9h-4v6h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5m7 3.74V9h-1.25v4.5h-1.12V10h-1.25v3.5h-1.13V9H14.5v5a1 1 0 001 1h4a1 1 0 001-1z" />
    </svg>
  );
}

export default NewIcon;
