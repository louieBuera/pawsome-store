export const imageURLs: { [key: string]: string} = {
  splash: "/assets/images/pexels-nord6-7324407.jpg"
};

interface ImageDetails {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const images: { [key: string]: ImageDetails} = {
  splash: {
    src: "/assets/images/pexels-nord6-7324407.jpg",
    alt: "Puppies in pickup truck",
    width: 5215,
    height: 3481
  },
  image1: {
    src: '/assets/images/pexels-goochie-poochie-3361739.jpg',
    width: 4297,
    height: 5371,
    alt: 'Shih Tzu'
  },
  image2: {
    src: '/assets/images/pexels-jhelmuth-3726314.jpg',
    width: 6000,
    height: 4000,
    alt: 'Siberian Husky'
  },
  image3: {
    src: '/assets/images/pexels-steshkawillems-1390361.jpg',
    width: 3456,
    height: 4150,
    alt: 'Cavalier King Charles Spaniel'
  }
};