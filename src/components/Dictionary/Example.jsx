const Example = ({ mean }) => {
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.example}>
              <li class="pl-5 mt-2 space-y-1 list-disc list-inside">
                {def.example}
              </li>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Example;
