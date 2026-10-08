export interface VideoShowcaseData {
  title: string;
  description: string;
  bullets: string[];
  video: {
    channelTitle: string;
    channelSubtitle: string;
    phone: string;
    youtubeUrl: string;
    embedUrl: string;
    thumbnail: string;
  };
}

export const videoShowcaseData: VideoShowcaseData = {
  title: "The server is designed to store huge amounts of data",
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical",
  bullets: [
    "Stay connected all the time",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    "The standard chunk of Lorem Ipsum used",
    "If you use this site regularly and would like",
  ],
  video: {
    channelTitle: "Charming House studio Uttara Dhaka",
    channelSubtitle: "Charming House Corporate Video Production Company",
    phone: "01917-462410",
    youtubeUrl: "https://www.youtube.com",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
};
