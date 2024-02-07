const Drum = ({ audioFiles, handleClick }) => {
  const buttonEl = audioFiles.map((file) => {
    return (
      <button
        key={file.key}
        className="drum-pad"
        id={`drum-pad-${file.key}`}
        onClick={() => handleClick(file.name, file.key)}
      >
        <audio className="clip" id={file.key} src={file.url}></audio>
        {file.key}
      </button>
    );
  });

  return (
  <div className="btn-container">
    {buttonEl}
  </div>
    );
};

export default Drum;
