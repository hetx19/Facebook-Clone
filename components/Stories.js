import StoryCard from "./StoryCard";

const stories = [
  {
    id: 1,
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    id: 2,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 3,
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 4,
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: 5,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const styles = {
  wrapper: `flex justify-center space-x-3 mx-auto`,
};

const Stories = () => {
  return (
    <div className={styles.wrapper}>
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
