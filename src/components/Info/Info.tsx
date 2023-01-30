interface InfoProps {
  text: string;
}

export const Info = ({ text }: InfoProps): JSX.Element => {
  return <p className="info-text">{text}</p>;
};

export default Info;
