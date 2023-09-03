import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import PodcastPage from "../components/PodcastPage/PodcastPage";

const ALBUM_URL =
  "https://api.vimeo.com/me/albums/8997068/videos?fields=name,description,release_time,uri,pictures&per_page=100";

async function authorizedFetch(url) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.vimeo.*+json;version=3.4",
      Authorization: `bearer ${process.env.VIMEO_KEY}`,
    },
  });
  const data = (await response.json()).data;
  return data;
}

export async function getServerSideProps(context) {
  const albumData = (await authorizedFetch(ALBUM_URL))
    .map((video) => {
      const cleanedVideo = {
        uri: video.uri.substr(8),
        name: video.name,
        description: video.description,
        release_time: video.release_time,
        picture: video.pictures["base_link"],
      };
      return cleanedVideo;
    })
    .sort((videoA, videoB) => {
      const a = videoA["release_time"];
      const b = videoB["release_time"];
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    });
  const currentVideoId = context.query.id || albumData[0].uri;
  const currentVideoData = albumData.find(
    (video) => video.uri == currentVideoId
  );
  if (!currentVideoData) {
    return {
      notFound: true,
    };
  }
  const PICTURES_URL = `https://api.vimeo.com/videos/${currentVideoData.uri}/pictures?fields=base_link,active`;
  const pictureData = await authorizedFetch(PICTURES_URL);
  const bannerImage = pictureData.find((picture) => !picture.active)[
    "base_link"
  ];
  return {
    props: {
      bannerImage,
      albumData,
      currentVideoData,
    },
  };
}

export default function Home({ bannerImage, albumData, currentVideoData }) {
  return (
    <div>
      <Head>
        <title>{currentVideoData.name} : Daksh Podcasts</title>
        <meta
          name="description"
          content="Hosted and produced by Daksh, a series of engaging podcast episodes starring industry experts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <PodcastPage
          bannerImage={bannerImage}
          albumData={albumData}
          currentVideoData={currentVideoData}
        />
        <Footer />
      </main>
    </div>
  );
}
