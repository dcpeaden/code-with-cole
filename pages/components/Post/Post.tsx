interface Props {
  timestamp: string;
  title: string;
  description: string;
}

export default function Post(props: Props) {
  return (
    <>
      <div
        className={
          "card font-serif hover:bg-slate-100 hover:underline hover:cursor-pointer w-96 mx-auto justify-center"
        }
      >
        <h1 className={"text-xl"}>{props.title}</h1>
        <h2>{props.description}</h2>
        <p>Created on {props.timestamp}</p>
      </div>
    </>
  );
}
