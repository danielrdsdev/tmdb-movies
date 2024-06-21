import { baseUrl } from "@/config/site";
import { fetchTmdb } from "@/lib/fetch-tmdb";
import type { MovieDetails } from "@/types/movie-details";
import type { MovieData } from "@/types/movie-trending";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdditionalInformation } from "./components/additional-information";
import { MovieCreditsSection } from "./components/movie-credits-section";
import { MovieDetailsSection } from "./components/movie-details-section";

type MoviePageProps = {
  params: {
    id: number;
  };
};

export async function generateStaticParams() {
  const fetchParams =
    "/discover/movie?include_adult=false&include_video=false&language=pt-BR&sort_by=popularity.desc";
  const data = await fetchTmdb<MovieData>(fetchParams);

  if (!data) {
    return notFound();
  }

  return data.results.map((data) => ({
    id: String(data.id),
  }));
}

export async function generateMetadata({
  params: { id },
}: MoviePageProps): Promise<Metadata> {
  const fetchParams = `/movie/${id}?language=pt-BR`;
  const data = await fetchTmdb<MovieDetails>(fetchParams);

  if (!data) {
    return notFound();
  }

  return {
    title: data.title,
    description: data.overview,
    openGraph: {
      title: data.title,
      description: data.overview,
      url: `${baseUrl}${data.id}`,
      siteName: "TMDB Movies",
      images: {
        url: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
        alt: data.title,
      },
    },
    twitter: {
      title: data.title,
      description: data.overview,
      images: {
        url: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
        alt: data.title,
      },
    },
  };
}

export default async function MoviePage({ params: { id } }: MoviePageProps) {
  const fetchMovieDetailsParams = `/movie/${id}?language=pt-BR`;
  const fetchMovieCreditsParams = `/movie/${id}/credits?language=en-US`;
  const [movieDetailsData, movieCreditsData] = await Promise.all([
    fetchTmdb<MovieDetails>(fetchMovieDetailsParams),
    fetchTmdb<MovieCredit>(fetchMovieCreditsParams),
  ]);

  if (!movieDetailsData) {
    console.error("Movie details not found for ID:", id);
    return null;
  }

  if (!movieCreditsData) {
    console.error("Movie credits not found for ID:", id);
    return null;
  }

  return (
    <>
      <MovieDetailsSection
        data={movieDetailsData}
        crew={movieCreditsData.crew}
      />

      <div className="container py-4 flex flex-col gap-8 lg:grid lg:grid-cols-[90%,1fr] lg:gap-4 items-start">
        <MovieCreditsSection data={movieCreditsData.cast} />
        <AdditionalInformation data={movieDetailsData} />
      </div>
    </>
  );
}
