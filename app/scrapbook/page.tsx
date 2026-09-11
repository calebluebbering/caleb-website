export default function Page() {
  const photos = [
    {
      image: "/images/scrapbook2.jpg",
      title: "Bryce Canyon, UT",
      caption: "",
      className: "scrapbook-photo-large",
    },
    {
      image: "/images/scrapbook1.jpg",
      title: "",
      caption: "",
      className: "",
    },
    {
      image: "/images/scrapbook4.jpg",
      title: "",
      caption: "Conquered my worst fear (at an aquarium)",
      className: "",
    },
    {
      image: "/images/scrapbook3.jpg",
      title: "Chicago, IL",
      caption: "",
      className: "",
    },
    {
      image: "/images/scrapbook5.jpg",
      title: "Central Park, NYC",
      caption: "",
      className: "scrapbook-photo-wide",
    },
    {
      image: "/images/scrapbook6.jpg",
      title: "Jefferson City, MO",
      caption: "The capitol of practically the world",
      className: "",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col max-w-5xl mx-auto px-4 py-4 sm:py-8 leading-5 font-sans">

      <section className="my-container">
        <h2 className="section-title">Scrapbook</h2>

        <p className="scrapbook-intro">
          
        </p>

        <div className="scrapbook-grid">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className={`scrapbook-item scrapbook-item-${index + 1} ${photo.className}`}
            >
              <div className="scrapbook-image-wrap">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="scrapbook-image"
                />

                {index === 0 && (
                  <span className="scrapbook-tape scrapbook-tape-blue" />
                )}

                {index === 2 && (
                  <span className="scrapbook-tape scrapbook-tape-pink" />
                )}
              </div>

              <figcaption>
                <strong>{photo.title}</strong>
                <span>{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        {/*
        <div className="scrapbook-note">
          <span>✦</span>
        </div>
        */}
      </section>

    </main>
  );
}