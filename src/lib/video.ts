/** Turns a plain YouTube/Vimeo/mp4 URL into the right embeddable form. */
export type VideoEmbed =
  | { kind: "youtube"; embedUrl: string }
  | { kind: "vimeo"; embedUrl: string }
  | { kind: "file"; url: string }
  | null;

export function resolveVideoEmbed(url: string): VideoEmbed {
  if (!url) return null;

  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  if (youtubeMatch) {
    return { kind: "youtube", embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1` };
  }

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return { kind: "vimeo", embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1` };
  }

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return { kind: "file", url };
  }

  return null;
}
