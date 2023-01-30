interface InfoProps {
  text: string;
}

export const Info = ({ text }: InfoProps): JSX.Element => {
  return <h2 className="info-text">{text}</h2>;
};

export default Info;
