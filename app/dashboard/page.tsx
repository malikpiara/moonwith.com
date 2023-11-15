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
     <Link key={i} className="rounded bg-green-300 hover:bg-green-400 w-3 h-3 inline-flex px-4 mx-1" href={matchingPost.slug} title={matchingPost.slug}/>
     )
  } else {
    elements.push(
      <Link key={i} className="rounded bg-gray-200 hover:bg-gray-300 w-3 h-3 inline-flex px-4 mx-1" href={""} title={formattedDate}/>
      );
  }
 }
 return elements;
};

export default function Dashboard() {
  return (
    <article className="py-6 prose dark:prose-invert">
        <h1>Dashboard</h1>
        
        <h2>Writing Streak</h2>
        {writingStreak()}
    </article>
  )
}
