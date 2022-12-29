const MeanigList = ({ mean }) => {
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.definition}>
              <li class="pl-5 mt-2 space-y-1 list-disc list-inside">
                {def.definition}
              </li>
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
};

export default MeanigList;
