interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps): JSX.Element => {
  return <h1 className="title">{title}</h1>;
};

export default Title;
