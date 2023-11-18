import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { format, subDays } from 'date-fns'; 

const currentDateTime = new Date();
let LastThirtyDays = subDays(currentDateTime, -1);

const writingStreak = () => {
  let days = 30;
  let elements = [];

 for (let i = 0; i < days; i++) {
  LastThirtyDays = subDays(LastThirtyDays, +1);
  const formattedDate = format(LastThirtyDays, 'yyyy-MM-dd');

  // Check if any post matches the current date
  const matchingPost = allPosts.find((post) => post.date.startsWith(formattedDate));

  if (matchingPost) {
    elements.push(
     <Link key={i} className="rounded bg-pistachio hover:bg-pistachioDark w-3 h-3 inline-flex px-4 mx-1" href={matchingPost.slug} title={matchingPost.slug}/>
     )
  } else {
    elements.push(
      <Link key={i} className="rounded bg-eggshell hover:bg-eggshellDark w-3 h-3 inline-flex px-4 mx-1" href={""} title={formattedDate}/>
      );
  }
 }
 return elements;
};

export default function Dashboard() {
  return (
    <article className="py-6 prose dark:prose-invert">
        <h1 className="text-primary dark:text-secondary">Public Dashboard</h1>
        
        <h2 className="text-primary  dark:text-secondary">Activity Map</h2>
        <p>Below you can see how many blog posts Malik has written in the last 30 days.</p>
        {writingStreak()}
       
    </article>
  )
}
