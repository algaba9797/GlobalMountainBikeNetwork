const shuffleArray = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Rail = ({ title, data }) => {
  const railTitle = title?.slice(0, 10);

  // Creating random order for the fake example
  const videos = data && shuffleArray(data);
  return (
    <div>
      <b> {railTitle}</b>
      <div style={{ display: "flex", overflowX: "scroll", height: "100px" }}>
        {videos &&
          videos.map((item) => {
            return (
              <img
                src={`https://i.ytimg.com/vi/${item?._id}/maxresdefault.jpg`}
                alt="Featured video"
                style={{ padding: "10px" }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Rail;
