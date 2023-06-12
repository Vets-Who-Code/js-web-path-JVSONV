type Props = {
  commits: {}[];
};

const Github = (props: Props) => {
  

  return (
    <div>
      Github
      <ul>{props.commits.map(commit => {
        return <li key={commit.node_id} >{commit.commit.message}</li>
      })}</ul>
    </div>
  );
};

export default Github;
