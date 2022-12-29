const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.synonyms?.map((ant) => (
            <li class="pl-5 mt-2 space-y-1 list-disc list-inside">{ant}</li>
          ))
        )
      )}
    </div>
  );
};

export default Antonym;
