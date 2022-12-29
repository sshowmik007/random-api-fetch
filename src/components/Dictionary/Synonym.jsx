const Synonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.synonyms?.map((syn) => (
              <li class="pl-5 mt-2 space-y-1 list-disc list-inside">{syn}</li>
            ));
          })
        )
      )}
    </div>
  );
};

export default Synonym;
