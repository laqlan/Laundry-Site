import bannerImage from '../../media/laundry banner.png';

export default function BannerGraphic() {
  return (
    <>
      <img
        src={bannerImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />
    </>
  );
}
