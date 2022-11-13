interface Props {
  timestamp: string;
  title: string;
  description: string;
}

export default function Post(props: Props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <p>Created on {props.timestamp}</p>
    </>
  );
}
